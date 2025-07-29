const http = require("http");
const { Worker } = require("worker_threads");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/slow") {
    const worker = new Worker("./worker-thread.js");
    worker.on("message", (j) => {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Slow Page ${j}`);
    });
    worker.on("error", (error) => {
      console.error("Worker error:", error);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    });
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
