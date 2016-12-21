/*
TIME SERVER
 Exercise 10 of 13

Write a TCP time server!

Your server should listen to TCP connections on the port 
provided by the first argument to your program. For each 
connection you must write the current date & 24 hour time 
in the format:

    "YYYY-MM-DD hh:mm"

followed by a newline character. Month, day, hour and minute 
must be zero-filled to 2 integers. For example:

    "2013-07-06 17:42"
*/


var net = require('net')
var port = process.argv[2]
var strftime = require('strftime') // not required in browsers


//Every connection received by your server triggers 
//another call to the callback.

var server = net.createServer(function (socket) {

	//console.log(strftime('%F %R', new Date()))
	socket.end(strftime('%F %R', new Date()))

	// socket handling logic
    })
 

//net.createServer() also returns an instance of your server. 
//You must call server.listen(portNumber) to start listening 
//on a particular port.

server.listen(port)


