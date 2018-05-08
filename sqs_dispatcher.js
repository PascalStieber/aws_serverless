// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.loadFromPath('./config.json');

// Create an SQS service object
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

exports.handler = function(event, context) {  
    console.log("\n\nLoading sqs_dispatcher\n\n");
    console.log(process.env.sqs_url)

  var params = {
   DelaySeconds: 10,
   MessageAttributes: {
    "Title": {
      DataType: "String",
      StringValue: "The Whistler"
     },
    "Author": {
      DataType: "String",
      StringValue: "John Grisham"
     },
    "WeeksOn": {
      DataType: "Number",
      StringValue: "6"
     }
   },
   MessageBody: "Information about current NY Times fiction bestseller for week of 12/11/2016.",
   QueueUrl: process.env.sqs_url
  };

  sqs.sendMessage(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.MessageId);
    }
  });

}