let chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1.0')

// creating add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// creating remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})

// creating list command
yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler: function() {
        console.log('Listing a new note...')
    }
})

// creating read command
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    handler: function() {
        console.log('Reading a new note...')
    }
})


// console.log(yargs.argv)
yargs.parse()