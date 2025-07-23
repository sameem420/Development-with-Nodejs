const fs = require("fs");

const readableStream = fs.createReadStream("sample.txt", { encoding: "utf-8" });
const writableStream = fs.createWriteStream("output.txt");

readableStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk);
  writableStream.write(chunk);
});

readableStream.on("end", () => {
  console.log("No more data to read.");
  writableStream.end();
});

readableStream.on("error", (err) => {
  console.error("Error reading stream:", err);
});


