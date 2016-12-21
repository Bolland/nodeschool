var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var fileExtension = "."+process.argv[3];

//forEach function
fs.readdir(dir, function (err,data){
	data.forEach(function(file){
		if (path.extname(file) == fileExtension)
			console.log(file)
	})
})

/*
//Alternative
fs.readdir(dir, function readDir(err,data){
	for (var i = 0; i < data.length; i++){
		if (path.extname(data[i]) == fileExtension){
			console.log(data[i]);
		};
	}
})
*/



