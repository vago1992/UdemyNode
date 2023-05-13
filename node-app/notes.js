const { default: chalk } = require("chalk")
const fs=require("fs")

const getNotes= ()=>{
    return "Your notes"
}

const readNote= (title)=>{
    const notes=loadNotes()
    
    const note=notes.find((note)=>note.title===title)

    if (note){
        console.log(chalk.green.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse("Note was not found"))
    }
}

const removeNote= (title)=>{
    const notes=loadNotes()
    
    const notesToKeep = notes.filter((note)=>{
        return note.title!=title
    })

    if (notes.length>notesToKeep.length){
        console.log(chalk.green("The note was removed"))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red("No notes were removed"))
    }
}

const addNote= (title,body)=>{
    const notes=loadNotes()
    
    const duplicatNote=notes.find((note)=> note.title===title)

    debugger

    if (!duplicatNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added"))
    }else{
        console.log(chalk.red.inverse("Note Title taken"))
    }

    
}

const saveNotes= (notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes=()=>{
    try{
        const dataBuffer=fs.readFileSync("notes.json")
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return[]
    }

    
}

const listNotes=()=>{
    const notes=loadNotes()
    console.log(getNotes())
    notes.forEach((note)=>{
        console.log(note.title)
    })


}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}