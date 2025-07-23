const http = require("http");

const server = http.createServer((req, res) => {
  const user = {
    firstName: "John",
    lastName: "Doe",
  };
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(user));
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
