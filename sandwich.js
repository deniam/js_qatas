// how to use a class-based program
// sandwhich.add("bread")
// sandwhich.isValid() => true or false

// how to use a function-based program
// let sandwhich = []
// sandwhich = add(sandwhich, "bread")
// isValid(sandwhich)

// valid sandwhiches should have 1 or more layers between the bread
// if you're already doing TDD and want to practice, TDD it
// if you're already comfortable with TDD, build your own 'describe' and 'it' functions


const add = (sandwhich, ingredient) => {
    sandwhich.push(ingredient)
    return sandwhich
}

const isValid = (sandwhich) => {
    // begins and ends with "bread"
    // AND have something in between
    lastIndex = sandwhich.length - 1
    return sandwhich[0] === "bread" && sandwhich[lastIndex] === "bread" && sandwhich[1] !== "bread" 
}

// script
let sandwhich = []
sandwhich = add(sandwhich, "bread")
sandwhich = add(sandwhich, "cheese")
sandwhich = add(sandwhich, "bread")

console.log(sandwhich)

console.log(isValid(sandwhich))