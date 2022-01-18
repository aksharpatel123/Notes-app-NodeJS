const fs = require('fs')
let chalk = require('chalk')
const { title } = require('process')


const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        // console.log(notes)
        savaNotes(notes)
        console.log(chalk.green.inverse('new note added successfully!'))
    }
    else {
        console.log(chalk.red.inverse('Note title is already taken!'))
    }
   
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter( (note) => note.title !== title)

    if (notes.length !== notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed!'))
        savaNotes(notesToKeep)
    }
    else {
        console.log(chalk.red.inverse('No note found!'))
    }

    
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.yellow.inverse('\nYour notes: \n'))

    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse.bold.blue('Note Title: ' + note.title))
        console.log(note.body)
    }
    else {
        console.log(chalk.bold.inverse.red('No such note found!'))
    }
}

const savaNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}