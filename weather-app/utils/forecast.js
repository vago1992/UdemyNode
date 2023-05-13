const request=require("request")


const forecast=(address,callback)=>{
    const url='https://api.weatherapi.com/v1/current.json?key=99ad21a5684b45d497931952230505&q='+encodeURIComponent(address)+''
    request({url:url,json:true}, (error, {body})=>{

        if (error){
            console.log(error)

            callback("Unable to connect",undefined)
        }else if(body.length===0){

            callback("Unable to find location. Try another search",undefined)

        }else{
            callback(undefined,{
                city:body.location.name,
                country:body.location.country,
                humidity:body.current.humidity,
                temperature:body.current.feelslike_c
            })
        }

    })
}

module.exports= forecast 