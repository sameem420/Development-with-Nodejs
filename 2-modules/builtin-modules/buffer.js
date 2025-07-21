const buffer = new Buffer.from("Hello, World!");

console.log(buffer.toString());
console.log(buffer.length);
console.log(buffer[0]); // Prints the first byte of the buffer
console.log(buffer.slice(0, 5).toString()); // Prints 'Hello'
console.log(buffer.includes("World")); // Checks if 'World' is in the buffer
console.log(buffer.indexOf("World")); // Returns the index of 'World' in the buffer
console.log(buffer.toJSON()); // Converts the buffer to JSON format

