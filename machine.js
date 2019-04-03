// Code here

// Greet the user using console.log
// Prompt for food, and save to a variable
// Prompt for number of items, and save to a variable
// print out the food, based on the second prompt value
// send goodbye message via console.log

console.log("Salutations and hello, I am the wacky vending machine!")
let foodChoice = prompt("PLEASE ENTER CHOSEN FOOD.")
let numberOfFood = prompt("HOW MANY FOOD DO YOU WISH FOR?")

if (numberOfFood.includes("tons")){
  let randomFloatingNumber = (Math.random() * 20) + 1
  let randomInteger = randomFloatingNumber.toFixed(0)
  numberOfFood = randomInteger
}

while (numberOfFood > 0) {
  console.log(`${foodChoice}`)
  numberOfFood--
}

console.log("Buuuuuuuyyyyyyyyy")

// if the user supplies "tons" to the numberOfFood prompt then print the food 20 times
// if tons is supplied, print the food some number less than 20
