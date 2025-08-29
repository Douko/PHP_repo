async function sleep(seconds) {
  await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

// Usage
async function countdownWithSleep() {
  for (let i = 5; i > 0; i--) {
    console.log(i);
    await sleep(1);
  }
  console.log("Liftoff!");
}

countdownWithSleep();
