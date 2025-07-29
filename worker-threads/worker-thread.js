const { parentPort } = require("worker_threads");
// This file is executed in a worker thread

let j = 0;
for (let i = 0; i < 6000000000; i++) {
  // Simulating a slow operation
  j++;
}

parentPort.postMessage(j); // Send the result back to the main thread
parentPort.close(); // Close the worker thread after completion
