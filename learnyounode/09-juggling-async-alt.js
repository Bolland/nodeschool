 var http = require('http')
var bl = require('bl')

var results = []
var count = 0

function httpGet(i){
	http.get(process.argv[2+i],function(response){
		response.pipe(bl(function(err,data){
			if (err)
				return console.error(err)

			count++
			results[i]=data.toString()

			if (count==3)
				printResults()
		}))

	})
}


function printResults(){
	for (var i = 0; i < 3; i++) {
		console.log(results[i])
	}
}

for (var i = 0; i<3; i++) {
	httpGet(i)
};