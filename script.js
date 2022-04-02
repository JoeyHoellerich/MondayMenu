let meatArray = ["cow", "pig", "ostrich", "chicken", "duck", "squirrel"];
let vegArray = ["pepper", "onion", "broccoli", "eggplant"];
let dessertArray = ["ice cream", "cake", "pie", "cherries jubile"];

meatArray.pop();
vegArray.pop();

let dessert1 = dessertArray[0];

mondayMenu = meatArray.concat(vegArray, dessertArray);


console.log(meatArray);
console.log(vegArray);
console.log(dessertArray);
console.log(dessert1);
console.log(mondayMenu);