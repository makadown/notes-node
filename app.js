const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
var title = {
    describe: 'Título de la nota',
    demand: true,
    alias: 't'
};

// const argv = yargs.argv;
const argv = yargs.command('add', 'Agregar una nueva nota', {
        title,
        body: {
            describe: 'Cuerpo de la nota',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'Listar todas las notas')
    .command('read', 'Leer una nota', { title })
    .command('remove', 'Borrar una nota', { title })
    .help().argv;

var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(note => {
        console.log(note);
    });

} else if (command === 'read') {
    var noteRead = notes.getNote(argv.title);
    if (noteRead) {
        console.log('Note found');
        notes.logNote(noteRead);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note doesnt exist';
    console.log(message);
} else {
    console.log('Command not recognized');
}