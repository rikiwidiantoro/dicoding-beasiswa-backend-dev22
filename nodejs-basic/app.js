// const firstName = process.argv[2];
// const lastName = process.argv[3];

// console.log(`Hello ${firstName} ${lastName}`);

// const server = new Server({
//   host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });



const coffee = require("./lib/coffee");
const { firstName, lastName } = require("./lib/user");
const http = require('http');

 

// console.log(coffee);
console.log(firstName);
console.log(lastName);