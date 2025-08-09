function readFile(filename, callback) {
  setTimeout(() => {
    if (filename === "nonexistent.txt") {
      callback(new Error("File not found"));
    } else {
      callback(null, "File contents");
    }
  }, 1000);
}
function handleFileContents(error, contents) {
  if (error) {
    console.log("Error reading file: ", error.message);
  } else {
    console.log("File contents: ", contents);
  }
}

readFile("example.txt", handleFileContents);
readFile("nonexistent.txt", handleFileContents);
