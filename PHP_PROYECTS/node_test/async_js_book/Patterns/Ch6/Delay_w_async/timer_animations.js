async function typeText(element, text, delay = 100) {
  for (let char of text) {
    element.textContent += char;
    await sleep(delay);
  }
}

// Usage (in browser)
const outputElement = document.getElementById("output");
typeText(outputElement, "Hello, world!", 150);
