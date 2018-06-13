/*var obj = {
    name: 'Mayito'
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);*/

/* esta seria la manera en que trabajariamos con json */
/* var personString = '{ "name": "Mario", "age": 38 }';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person); */

const fs = require('fs');
var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
// original Note string
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);