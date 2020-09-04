const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=0bb7598c1646610f30b59439c050994f&query=${latitude},${longitude}&units=f`
    request({url: url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `It is current ${body.current.temperature} degresout.There is a ${body.current.wind_speed} wind speed`)
        }
    })
}

module.exports = forecast;