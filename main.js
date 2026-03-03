

class Person {

  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

// First input should be name
// Second input should be age
// Third input should be number of times the person should jump
const inputs = process.argv.slice(2)

// If the number of inputs is less than three, then the program will stop
// and provide an example for how to run the program
if (inputs.length < 3) {
  console.log("Please provide a name, age, and number of jumps like so:\node main.js Jin 30 5")
  process.exit(1)
}

// Organizing inputs into variables for better readability
const inputName = inputs[0] // I would use "name" here but js has a special thingy for name
const age = inputs[1]
const jumps = inputs[2]

// Create a new person with name and age from inputs
let person = new Person(inputName, age)

// If jumps is 4, i will go from 0, 1, 2, 3 and stop once i is equal to 4
// 4 is not greater than 4, so the loop will stop at that point
for(let i = 0; i < jumps; i++) { 
  console.log(`${person.name} is jumping!`)
}