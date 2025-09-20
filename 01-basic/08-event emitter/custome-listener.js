const EventEmitter = require('events');

class myCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = 'hello'
  }
  greet(name) {
    this.emit('greeting', `${this.greeting},${name}`)
  }
}

const myCustomEmitters = new myCustomEmitter();

myCustomEmitters.on('greeting', (input) => {
  console.log(`greeting event : ${input}`)
})

myCustomEmitters.greet('siddharth')