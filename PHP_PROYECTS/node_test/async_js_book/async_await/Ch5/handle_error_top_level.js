processData.on("unhandleRejection", (reason, promise) => {
  console.error("UnhandledRejection at:", promise, "reason:", reason);
  /*    code here     */
});

async function main() {
  try {
    await processData();
  } catch (error) {
    console.error("Top-level error caught:", error);
  }
}

main();
