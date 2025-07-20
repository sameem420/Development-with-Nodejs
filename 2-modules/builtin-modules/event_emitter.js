const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) => {
  console.log(`Order Recieved, Baking ${size} Pizza with ${topping} topping!`);
});

emitter.on("order-pizza", (size) => {
  if (size == "large") {
    console.log("Complimentry Drink will be served!");
  }
});

emitter.emit("order-pizza", "large", "olives");
