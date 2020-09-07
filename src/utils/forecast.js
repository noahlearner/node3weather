const request = require('postman-request')

const forecast = (latitude,longitude, callback) => {
    const key = 'b8e298897cb36a5a83be0a23f51ac4dd'
    const url = 'http://api.weatherstack.com/current?access_key=' + key + '&units=f&query=' + latitude + ',' + longitude;

    request({
        url: url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the Weather api', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const current = body.current;
            
            const temp = current.temperature;
            console.log(temp);
            callback(undefined, {
                summary: 'The weather is ' + temp + ' degrees with ' + current.current_windspeed + ' mph winds out of the ' + current.wind_dir + ' in ' + body.location.name + ', ' + body.location.region + '.'
            })
        }
    })


}

module.exports = forecast;