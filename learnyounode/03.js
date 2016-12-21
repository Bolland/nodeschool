//To perform a filesystem operation you are going to need the fs module from the Node core library. To load this kind of module, or any other "global" module, use the following incantation:

//    var fs = require('fs')

//Now you have the full fs module available in a variable named fs.


var fs = require('fs');

// use this to define the file as an argument (use "node 03.js FILENAME" to run)
buffer = new Buffer(fs.readFileSync(process.argv[2]));

//Alternative
//buffer = new Buffer(fs.readFileSync("commandline.js"));

var array = buffer.toString().split('\n');

console.log(array.length-1);