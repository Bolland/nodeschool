var fs = require('fs');
var path = require('path');
var myModule = require('./06-modular-2.js');

var dir = process.argv[2];
var fileExtension = process.argv[3];

//pass function along --> functino will be accessible  in mobule vie "callback"
myModule(dir,fileExtension,function (err,data){
	if (err){
		return consol.error(err);
	}
	//console.log(data.join('\n'));
	//Alternative:
	data.forEach(function(file){
		console.log(file)
	})
})

//You must not print directly to the console from your module file, only from your original program.
