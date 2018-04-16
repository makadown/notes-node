console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

//console.log(_.isString(true));
//console.log(_.isString('Mario'));
//var result = notes.add(5,9);
//console.log(result);

var filteredArray = _.uniq(['Mario', 1, 'Petra',2 ,2, 'Mario','Mario','Estela','Janine','Lupe', 1, 2 , 3, 4]);
console.log(filteredArray);

//var user = os.userInfo();
//console.log(user);
//fs.appendFileSync('greetings.txt', `\nHello ${user.username}, you are ${notes.age}`);
