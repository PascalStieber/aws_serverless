console.log('Loading function');

var AWS = require('aws-sdk');  
AWS.config.loadFromPath('./config.json');

module.exports.localFunction = function(event, context, callback) {  
	console.log('locally function execution...')
}