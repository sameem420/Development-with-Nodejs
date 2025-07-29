const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page  - No Cluster");
  } else if (req.url === "/slow") {
    for (let i = 0; i < 6000000000; i++) {
      // Simulating a slow operation
    }
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Slow Page - No Cluster");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
