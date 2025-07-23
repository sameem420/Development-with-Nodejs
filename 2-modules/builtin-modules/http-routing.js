const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome to the Home Page</h1>");
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html"); // Set the content type for HTML response
    res.end("<h1>About Us</h1><p>This is the about page.</p>");
  } else if (req.url === "/api") {
    res.setHeader("Content-Type", "application/json");
    const data = {
      name: "John Doe",
      age: 30,
      occupation: "Software Developer",
    };
    res.end(JSON.stringify(data));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end(
      "<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>"
    );
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
