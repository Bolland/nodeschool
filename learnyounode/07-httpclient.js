var http = require('http')

var urlParam = process.argv[2]

http.get(urlParam, function(response){
	//response is Node Stream obejct
	//Stream objects emit events: e.g. "data" "error" "end"
	//event listener: response.on("data",function(data){ stuff })

	//use http.get().setEncoding('uft8') to confert Buffer into String.

	//my solution:
	response.on("data",function(data){
		console.log(data.toString());
	})
	

	//Musterlösung:
/*	response.setEncoding('utf8');
	response.on("data",console.log)
	response.on("error",console.error)
*/
})


