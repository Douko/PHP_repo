// Funcion que pone un intervalo entre funcioones asincronas,
// que de paso parecen ejecutarse en sequencia
class RateLimiter {
  constructor(limit, interval) {
    this.limit = limit;
    this.interval = interval;
    this.queue = [];
    this.lastRun = Date.now();
  }

  async run(fn) {
    this.queue.push(fn);
    await this.process();
  }

  async process() {
    if (this.queue.length === 0) return;

    const now = Date.now();
    if (now - this.lastRun < this.interval) {
      await delay(this.interval - (now - this.lastRun));
    }

    const fn = this.queue.shift();
    this.lastRun = Date.now();
    await fn();

    if (this.queue.length > 0) {
      await this.process();
    }
  }
}

// Usage
const limiter = new RateLimiter(1, 1000);

async function fetchWithRateLimit(url) {
  return limiter.run(() => fetch(url).then((res) => res.json()));
}

// Example usage
(async () => {
  for (let i = 0; i < 5; i++) {
    const data = await fetchWithRateLimit(`https://api.example.com/data/${i}`);
    console.log(`Fetched data ${i}:`, data);
  }
})();
