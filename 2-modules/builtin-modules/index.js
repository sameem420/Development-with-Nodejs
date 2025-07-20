const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order Recieved, Baking ${size} Pizza with ${topping}!`);
  drinkMachine.serveDrink(size);
});

pizzaShop.order("large", "Olives");
pizzaShop.displayOrderNumber();
