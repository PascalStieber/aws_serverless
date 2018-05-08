console.log('Loading function');

var AWS = require('aws-sdk');  
AWS.config.loadFromPath('./config.json');

exports.handler = function(event, context) {  
    console.log("\n\nLoading handler\n\n");
    var sns = new AWS.SNS();

    sns.publish({
        Message: 'Test publish to SNS from Lambda',
        TopicArn: 'arn:aws:sns:us-east-1:961215281246:dispatch'
    }, function(err, data) {
        if (err) {
            console.log(err.stack);
            return;
        }
        console.log('push sent');
        console.log(data);
        context.done(null, 'Function Finished!');  
    });
};
