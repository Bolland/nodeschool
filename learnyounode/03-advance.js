var fs = require('fs');

var contentBuffer = fs.readFileSync(process.argv[2]);
var lines = contentBuffer.toString().split("\n").length-1;
console.log("Original content:" + lines);

var newContent = contentBuffer.toString() + "\nNeue Zeile"; 
var newLines = newContent.split("\n").length-1;
console.log("New content:" + newLines);


//learnings: Buffer does not have to be defined as var buffer = new Buffer(fs.readFile....) but readFileSync gives back Buffer object which is stored in var.
 