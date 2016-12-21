/*
HTTP FILE SERVER
 Exercise 11 of 13

Write an HTTP server that serves the same text file for each 
request it receives.

Your server should listen on the port provided by the first 
argument to your program.

You will be provided with the location of the file to serve 
as the second command-line argument. You must use the 
fs.createReadStream() method to stream the file contents
 to the response.
 */

var fs = require('fs')
var http = require('http')
var fileLocation = process.argv[3]

var server = http.createServer(function (request, response){

	//request handling logic

	//read filecontents from file specified in paramenter and pipe stream to response ("source.pipe(destination)")
	fs.createReadStream(fileLocation,'utf8').pipe(response)

})

server.listen(Number(process.argv[2]))

