/**
//? in js we know how much of the interaction of the user is handled through events:
//? on backend side, node.js offers us the option to build a similar system using the events module.
//? this module, in particular, offers the eventsemitter class, which we'll use to handle our events.
//? emit is used to trigger an event
//? on is used to add a callback function thats going to be executed when then events is triggered.
*/

const EventEmitter = require('events');
const myfirstEmitter = new EventEmitter();

// register a listener

myfirstEmitter.on('greet', (name) => {
  console.log(`hello ${name}`)
})

myfirstEmitter.emit('greet', 'siddharth')