console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {

    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    var notes = fetchNotes();
    // Esto filtra en las notas por la que tenga el titulo
    var filterNotes = notes.filter((note) => note.title === title);
    return filterNotes.length > 0 ? filterNotes[0] : null;
};

var removeNote = (title) => {

    var notes = fetchNotes();
    // Esto filtra en las notas por la que no tenga el titulo
    var filterNotes = notes.filter((note) => note.title !== title);

    saveNotes(filterNotes);
    return notes.length !== filterNotes.length;
};

var logNote = (noteRead) => {
    /*jshint -W087 */
    debugger;
    console.log('------------');
    console.log(`Title: ${noteRead.title}`);
    console.log(`Body: ${noteRead.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};