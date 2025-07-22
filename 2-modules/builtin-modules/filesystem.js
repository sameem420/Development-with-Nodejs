const fs = require("fs/promises");

fs.readFile("sample.txt", "utf-8")
  .then((data) => {
    console.log("File contents:", data);
  })
  .catch((err) => {
    console.error("Error reading file:", err);
  });

async function readFile() {
  try {
    const data = await fs.readFile("sample.txt", "utf-8");
    console.log("File contents:", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}
readFile();

// const fs = require("fs");

// const fileContents = fs.readFileSync("sample.txt", "utf-8");
// console.log("File contents:", fileContents);

// // Asynchronous file read
// // This will not block the event loop
// fs.readFile("sample.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File content:", data);
// });

// // Writing to a file
// fs.writeFileSync("output.txt", "Hello, World!", (err) => {
//   if (err) {
//     console.error("Error writing to file:", err);
//     return;
//   }
//   console.log("File written successfully!");
// });

// // Appending to a file
// fs.appendFile("output.txt", "\nThis is the Appended text.", (err) => {
//   if (err) {
//     console.error("Error appending to file:", err);
//     return;
//   }
//   console.log("File appended successfully!");
// });
