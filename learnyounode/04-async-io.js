//Write a program that uses a single asynchronous filesystem operation to 
//read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.
//The full path to the file to read will be provided as the first command-line argument.

var fs = require('fs');
var file = process.argv[2];

if (!file){
	console.log("Error, no file!");
} else{
	var content = fs.readFile(file,'utf8',function callback (err, data) {
  	//putting 'utf8' as option automatically converts buffer object into string.

  	if (err) throw err;
  	console.log(data.split('\n').length-1);
	});
}
