function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function exampleWithDelay() {
  console.log("Starting");
  await delay(2000);
  console.log("Two seconds have passed");
  await delay(1000);
  console.log("One more second has passed");
}

exampleWithDelay();
