/*  File System

const fs=require ("fs")

fs.writeFileSync("notes.txt","My name is santiago") //first is the name of the file, second after what you are adding to it
fs.appendFileSync("notes.txt","Mi ejercicio")

const add=require ("./utils.js")

const sum= add(4,-2)

console.log (sum)

*/
const validator=require("validator")
const notes=(require ("./notes.js"))
const chalk=require("chalk")
const yargs=require("yargs")


//console.log(validator.isEmail("andrew@example.com"))

/*console.log(validator.isURL("https://mead.io"))
console.log(chalk.green.bold("Success"))
const greenMSG=chalk.red.inverse("Error")
console.log(greenMSG)

console.log(process.argv[2])*/


/*const command= process.argv[2]
if (command=== "add"){

    console.log("Adding note!")
}else if (command==="remove"){
    console.log("Remove note!")
}*/


// Customize Yargs version

yargs.version("1.1.0")


// Create add command
yargs.command({
    command:"add",
    describe:"Add a new note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"Body of work",
            demandOption:true,
            type:"string"
        }
    },
    handler (argv){
        notes.addNote(argv.title,argv.body)
    }

})

//Create remove command

yargs.command({
    command:"remove",
    describe:"Remove a note",
    builder:{
        title:{
        describe:"Note Title",
        demandOption:true,
        type:"string"
    }},
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//Create Read command

yargs.command({
    command:"read",
    describe:"reading a note",
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

//Create List Command

yargs.command({
    command:"list",
    describe:"Listing a note",
    handler(){
        notes.listNotes()
    }
})

yargs.parse()

//add, remove, read, list
