/**
//? promises are better way to handle asynchronous code compare to callbacks.
*/

// create promises

function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

console.log('promises start');

delayFn(2000).then((res) => { console.log('after 2 sec') })
console.log('end')

// create promise and catch promises
function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject('cant not divide by zero');
    } else {
      resolve(num1 / num2);
    }
  })
}
divideFn(10, 0)
  .then(result => console.log(result))
  .catch(err => console.log(err))

