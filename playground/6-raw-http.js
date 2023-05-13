const https= require('https')
const url='https://api.ipdata.co/216.18.219.6?api-key=f896f82771e103e5af630b6ba0d3955d4ca86f1d487954fa216eb3cd&fields=ip,is_eu,city,region,region_code,country_name,country_code,continent_name,continent_code,latitude,longitude,postal,calling_code,flag,emoji_flag,emoji_unicode'

const request=https.request(url,(response)=>{

    let data=''

    response.on('data',(chunks)=>{
        data= data+ chunks.toString()
    })

    response.on('end',()=>{
        const body=JSON.parse(data)
        console.log(body)
    })

})

request.on('error',(error)=>{
    console.log('An error ',error)
})

request.end()