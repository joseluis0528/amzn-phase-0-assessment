// 1. Write your functions here

const katzDeli = []

function line(katzDeli){
    if (katzDeli.length === 0) {
        return 'The line is currently empty.'
    } else if (katzDeli.length > 0) {
        let position = [] 
        for (let i = 0; i < katzDeli.length; i++) { 
            position.push(`${i + 1}. ${katzDeli[i]}`)
        }
        return `The line is currently: ${position.join(' ')}`
    }
}

function takeANumber(katzDeli, string) {
    katzDeli.push(string)  
    console.log(`Welcome ${string}. You are number ${katzDeli.indexOf(string) + 1} in line.`)
}

function nowServing(katzDeli) {
    if (katzDeli.length === 0) {
        console.log(`There is nobody waiting in line!`)
    } else if (katzDeli.length > 0) {
        console.log(`Currently serving ${katzDeli[0]}.`) 
        katzDeli.shift()
    }
}

// 2. Example Usage

// const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"