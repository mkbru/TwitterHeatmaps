var logger = require('logger').createLogger('development.log');
var Twit = require('twit');
var SimpleFileWriter = require('simple-file-writer');


var T = new Twit({
    consumer_key:         '',
    consumer_secret:      '',
    access_token:         '',
    access_token_secret:  '',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

var toronto = ['-79.6393', '43.5847', '-79.1156', '43.8554']
var waterloo = ['-80.8690', '43.2668', '-80.1886', '43.6896']
var york = ['-79.7756', '43.7498', '-79.1561', '44.4254']
var durham = ['-79.3281', '43.7947', '-78.4378', '44.5170']
var hamilton = ['-80.2491', '43.0506', '-79.6227', '43.4705']
var newYork = ['-74.2589', '40.4774', '-73.7004', '40.9176']
var usa = ['-125.0011', '24.9493', '-66.9326', '49.5904']

var streamTwitter = T.stream('statuses/filter', { locations:usa} )

var writer = new SimpleFileWriter('./twittermaps.log');
writer.write("#lat,#lon")
writer.write("\n")


streamTwitter.on('tweet', function (tweet) {
        console.log(tweet.text);

        var check  = tweet.place;

        if(check) {
            writer.write(
            getCentroid(tweet.place.bounding_box.coordinates, true) + "," +
            getCentroid(tweet.place.bounding_box.coordinates, false)
            );
        }

    writer.write("\n");
})

// function determineCity(lat,lon){
//
// }
//


function getCentroid(coordinates,type){
    var x1 = JSON.stringify(coordinates[0][0][0]); //x1
    var x2 = JSON.stringify(coordinates[0][1][0]); //x2
    var x3 = JSON.stringify(coordinates[0][2][0]); //x3
    var x4 = JSON.stringify(coordinates[0][3][0]); //x4

    var y1 = JSON.stringify(coordinates[0][0][1]); //y1
    var y2 = JSON.stringify(coordinates[0][1][1]); //y2
    var y3 = JSON.stringify(coordinates[0][2][1]); //y3
    var y4 = JSON.stringify(coordinates[0][3][1]); //y4

    var lon = (parseFloat(x1)+parseFloat(x2)+parseFloat(x3)+parseFloat(x4))/4;
    var lat = (parseFloat(y1)+parseFloat(y2)+parseFloat(y3)+parseFloat(y4))/4;

    if(type == true){
        return lat;
    }
    else
    return lon;

}
