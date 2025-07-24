// const fs = require("fs");

// console.log("Starting file read operation...");

// fs.readFile("sample.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File content:", data);
// });

// console.log("End");

const crypto = require("crypto");
const https = require("https");

// const startTime = Date.now();

// console.log("Starting password hashing...");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

// console.log("Hash time:", Date.now() - startTime, "ms");

// process.env.UV_THREADPOOL_SIZE = 4; // Set thread pool size to 6
const MAX_CALLS = 6;
const startTime = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  https
    .request("https://jsonplaceholder.typicode.com/posts", (res) => {
      //   let data = "";
      res.on("data", (chunk) => {
        // data += chunk;
      });
      res.on("end", () => {
        console.log("Time for request:", Date.now() - startTime, "ms");
        // console.log(`Response ${i + 1}:`, JSON.parse(data).length);
        // if (i === MAX_CALLS - 1) {
        //   console.log(
        //     "Total time for all requests:",
        //     Date.now() - startTime,
        //     "ms"
        //   );
        // }
      });
    })
    .end();
  //   crypto.pbkdf2(
  //     "password",
  //     "salt",
  //     100000,
  //     512,
  //     "sha512",
  //     (err, derivedKey) => {
  //       if (err) {
  //         console.error("Error hashing password:", err);
  //         return;
  //       }
  //       console.log("Hash time:", Date.now() - startTime, "ms");
  //       //   console.log("Derived key:", derivedKey.toString("hex"));
  //     }
  //   );
}
