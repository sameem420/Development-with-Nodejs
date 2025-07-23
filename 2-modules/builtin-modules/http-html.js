const http = require("http");
const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const user = {
//     firstName: "John",
//     lastName: "Doe",
//   };
//   res.setHeader("Content-Type", "text/html");
//   res.end(
//     "<h1>Hello, " +
//       user.firstName +
//       " " +
//       user.lastName +
//       "!</h1>" +
//       "<p>Welcome to our website.</p>"
//   );
// });

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   fs.createReadStream("index.html").pipe(res);
//   //   const htmlTemplate = fs.readFileSync("index.html", "utf-8");
//   //   res.end(htmlTemplate);
// });

const server = http.createServer((req, res) => {
  const user = "Sameem";
  res.setHeader("Content-Type", "text/html");
  let htmlTemplate = fs.readFileSync("index.html", "utf-8");
  htmlTemplate = htmlTemplate.replace("{{user}}", user);
  res.end(htmlTemplate);
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
