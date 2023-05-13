const  request= require("request")
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const address=process.argv[2]

if (!address){
    console.log("Please add an address")
}else{
    geocode(address,(error,{city,longitude,latitude}={})=>{

        if (error){
            return console.log("Error: ", error)
        }
        forecast(city,(error,forecastData)=>{
    
            if (error){
                return console.log("Error: ", error)
            }
            console.log("Ciudad",city)
            console.log("Lat",latitude)
            console.log("lon",longitude)
            console.log("Data",forecastData)
        
        })
        
    
    })
}


