/**
//? callback are function that are passed as arguments to other functions.
//? callback function allow you to defer the execution of a code until after asynchrous operation compelted.
*/

const fs = require('fs')

function person(name, callbackFn) {
  console.log(`hello ${name}`)
  callbackFn()
}

function address() {
  console.log('indore')
}

person('Siddharth', address)

fs.readFile('./input.txt', 'utf-8', (err, data) => {
  if (err) throw err
  console.log(data)
})