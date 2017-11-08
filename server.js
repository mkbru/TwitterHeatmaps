var logger = require('logger').createLogger('development.log');
var Twit = require('twit');

var T = new Twit({
    consumer_key:         'SuGkK8V5j57uxcl1Z32wRBwI9',
    consumer_secret:      '2m9DpxayQe0gbPDiU160fEDkDJXpw6xs6hugR4TYa6nDtSZNpT',
    access_token:         '928272184446824448-lJuXGCwKG8AFrDkUrcRFd8OpVC8Z5Nj',
    access_token_secret:  'LFDD0ouhSi0J1Vku7MynxZwHZYQ7JqeDKtuWhSdIrPdqp',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

var toronto = ['-79.6393', '43.5847', '-79.1156', '43.8554']
var waterloo = ['-80.8690', '43.2668', '-80.1886', '43.6896']
var york = ['-79.7756', '43.7498', '-79.1561', '44.4254']
var durham = ['-79.3281', '43.7947', '-78.4378', '44.5170']
var hamilton = ['-80.2491', '43.0506', '-79.6227', '43.4705']

var stream = T.stream('statuses/filter', { locations: toronto} )

stream.on('tweet', function (tweet) {
    console.log(tweet)
    logger.info(tweet);
})