
const EventEmitter = require('events');


class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();


myEmitter.on('greet', () => {
  console.log('Hello, World!');
});

myEmitter.on('greet', () => {
  console.log('Another greeting!');
});

myEmitter.emit('greet');


myEmitter.on('greetWithName', (name) => {
  console.log(`Hello, ${name}!`);
});

myEmitter.emit('greetWithName', 'John');
