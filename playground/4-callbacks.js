setTimeout(()=>{
    console.log("Two second timeout")
},2000)

const names=["Juan", "Carlos","Ale"]

const shortNames=names.filter((name)=>{
    return name.length<=5
})

console.log(shortNames)

const geoCode=(address,callback)=>{
    
    setTimeout(()=>{
        const data={
            latitude:0,
            longitude:0
        }
        callback(data)
    },2000)
}


geoCode("Philadelphia",(data)=>{
    console.log(data)
})


const add=(num1,num2,callback)=>{

    setTimeout(()=>{

        const sum=num1+num2
        callback(sum)
    },2000)

}

add(5,8,(suma)=>{

    console.log(suma)
})
