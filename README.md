# Mochajs-Test-Automation

I have been trying to work with Mochajs. Mocha is a JavaScript test framework for Node.js programs, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library.
It’s a good framework but it is a little bit complex. Especially when we want to connect the database when we want to start our tests or when we want to use before() and after() hooks or even some weird errors.

This framework gets a little bit tricky when you want to work with promises and use the then method. I strongly suggest that in order to ditch the done method from the Mochajs framework and all the complexity that comes with it, use async and await keywords and try catch methods to find there is something wrong with your code.

this is an example of how you can use this code 

this is a link of issue that this matter was discussed

GitHub : https://github.com/Automattic/mongoose/issues/7367

Youtube : https://youtu.be/vuakR_SmcAw
