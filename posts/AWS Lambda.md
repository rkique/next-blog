[[NodeJS]]

AWS Lambda is an *event driven* serverless compute platform.


Trigger: A set of activities that invokes the function (runs the code you provide). The activity could be anything like a new object coming to your S3 bucket, a website or service going down, an API call, etc.

The actual function: This is the run-time code that constitutes the function. AWS supports Python, Node.js, C#, Go and Java8 as runtime environments.

Resources: Each function can be assigned certain Roles, which grants the function certain privileges such as reading S3 bucket contents, writing results to a database and so on.

## example

Let’s create a simple Lambda function that is invoked by an API call, i.e. we generate a URL, which when entered in the browser would invoke the function. Our input would be passed into the function via this URL and the output would be returned and shown in the browser.

```
import json

print('Loading function')

def lambda_handler(event, context):

    firstName = event['first']

    lastName = event['last']

    return 'Greetings, ' + firstName + ' ' + lastName +'!' 
```

To test this, you enter a JSON payload like so:

```
{
    "first": "Eric",
    
    "last" : "Xia"
}
```

And the function will simply return 

`Greetings, Eric Xia!`