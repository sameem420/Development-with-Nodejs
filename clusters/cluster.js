const cluster = require("cluster");
const http = require("http");
const os = require("os");

const numCPUs = os.cpus().length;
console.log(`Number of CPUs: ${numCPUs}`);

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  // Fork workers.
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker ${process.pid} started`);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home Page  - Cluster");
    } else if (req.url === "/slow") {
      for (let i = 0; i < 6000000000; i++) {
        // Simulating a slow operation
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow Page - Cluster");
    }
  });

  server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
  });
}
