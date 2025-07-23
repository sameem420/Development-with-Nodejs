const fs = require("fs");

const readableStream = fs.createReadStream("sample.txt", { encoding: "utf-8" });
const writableStream = fs.createWriteStream("output.txt");

readableStream.pipe(writableStream);
