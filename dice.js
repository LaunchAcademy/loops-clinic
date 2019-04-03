
let playAgainStatus = true

while (playAgainStatus === true){
  let randomFloatingNumber1 = (Math.random() * 6) + 1
  let randomNumber1 = Math.floor(randomFloatingNumber1)

  let randomFloatingNumber2 = (Math.random() * 6) + 1
  let randomNumber2 = Math.floor(randomFloatingNumber2)

  let sumOfDice = randomNumber1 + randomNumber2

  console.log(`You rolled a ${randomNumber1} and a ${randomNumber2}`)
  console.log(`Total: ${sumOfDice}`)
  let promptValue = prompt("Type 'y' to roll again, 'n' to stop")

  if (promptValue === "n"){
    playAgainStatus = false
  }
}
