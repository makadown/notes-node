console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var result = notes.add(5,9);
console.log(result);

//var user = os.userInfo();
//console.log(user);
//fs.appendFileSync('greetings.txt', `\nHello ${user.username}, you are ${notes.age}`);
