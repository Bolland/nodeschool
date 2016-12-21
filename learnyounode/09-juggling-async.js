/*
 JUGGLING ASYNC
 Exercise 9 of 13

This problem is the same as the previous problem (HTTP COLLECT) 
in that you need to use http.get(). However, this time you will 
be provided with three URLs as the first three command-line 
arguments.

You must collect the complete content provided to you by each
 of the URLs and print it to the console (stdout). You don't 
 need to print out the length, just the data as a String; one 
 line per URL. The catch is that you must print them out in the
  same order as the URLs are provided to you as command-line 
  arguments.

*/


var http = require('http')
var bl = require('bl')

var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

var content1 = ""
var content2 = ""
var content3 = ""

http.get(url1,function(response){
	
	response.pipe(bl(function(err,data1){
if (err)
		return console.error(err)

	content1 = data1.toString()

	http.get(url2,function(response){
	
	response.pipe(bl(function(err,data2){
		if (err)
			return console.error(err)

		content2 = data2.toString()

		http.get(url3,function(response){
	
		response.pipe(bl(function(err,data3){
			if (err)
				return console.error(err)

			content3 = data3.toString()

			console.log(content1)
			console.log(content2)
			console.log(content3)

		}))})


	}))})


	}))

})

