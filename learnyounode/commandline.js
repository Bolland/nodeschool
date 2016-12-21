
var x=0;
console.log("#### Strings ####");
for (var i=0;i<process.argv.length;i++){
	console.log("Position "+i+": "+String(process.argv[i]));
	//x += Number(process.argv[i]);
 }


console.log("#### Numbers, params only #### ");
for (var i=2;i<process.argv.length;i++){
	console.log("Position "+i+": "+Number(process.argv[i]));
 }
