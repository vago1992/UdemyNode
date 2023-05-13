const fs=require("fs")

/*const book={
    title:"Harry potter",
    author:"Jk Rowling"
}

const bookJSON=JSON.stringify(book)//returns a json string
fs.writeFileSync("1-json.json",bookJSON)
console.log(bookJSON)

const parseData=JSON.parse(bookJSON)

console.log(parseData.author)


const dataBuffer=fs.readFileSync("1-json.json")
const dataJSON=dataBuffer.toString()
const data=JSON.parse(dataJSON)
console.log(data.title)*/

const dataBuffer=fs.readFileSync("1-json.json")
const dataJSON=dataBuffer.toString()
const data=JSON.parse(dataJSON)
data.name="Santiago"
data.age=30
console.log(data)

const stringData=JSON.stringify(data)

fs.writeFileSync("1-json.json",stringData)