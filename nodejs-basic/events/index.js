const {EventEmitter} = require('events');

const birthdayEventListener = ({name}) => {
  console.log(`Happy Birthday ${name}!`);
}

const myEventEmitter = new EventEmitter();

myEventEmitter.on('birthday', birthdayEventListener);

myEventEmitter.emit('birthday', {name: 'Riki Widiantoro'});