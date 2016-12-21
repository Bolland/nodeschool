/*

 HTTP JSON API SERVER
 Exercise 13 of 13

Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

    {
      "hour": 14,
      "minute": 23,
      "second": 15
    }

Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'. For example:

    { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to your program.


*/


var http = require('http')
var url = require('url')
var strftime = require('strftime')
var port = process.argv[2]


var server = http.createServer(function(request,response){

	var requestContent = url.parse(request.url, true)

	console.log(requestContent)

	var d = new Date(requestContent.query['iso'])

	if(requestContent.pathname == '/api/parsetime'){
		console.log("parsetime")
	    response.writeHead(200, { 'Content-Type': 'application/json' })

	    //var d = strftime('%H %M %S', new Date(requestContent.query['iso']))
	    
	    var dJSON = {
	    	hour : d.getHours(),
	    	minute : d.getMinutes(),
	    	second : d.getSeconds()
	    }

	    //JSON.stringify({'hour' : , 'minute' : , 'second' : })
		//console.log("datum: "+dJSON)
		console.log("datum JSON:" + JSON.stringify(dJSON))
		return response.end(JSON.stringify(dJSON))
	}



	else if(requestContent.pathname == '/api/unixtime'){
	    response.writeHead(200, { 'Content-Type': 'application/json' })
		
		var dJSON = {
			unixtime : d.getTime()
		}

		return response.end(JSON.stringify(dJSON))

		else {
        response.writeHead(404)
        response.end()
	}
})

server.listen(port)


/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
    */