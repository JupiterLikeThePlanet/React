var accountSid = ''; // Your Account SID from www.twilio.com/console
var authToken = '';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '',  // Text this number
    from: '' // From a valid Twilio number
}, function(err, message) {
    if(err) {
        console.error(err.message);
    }
});


