module.exports = function (dir,filenameExtension,callback){

	var fs = require('fs');
	var path = require('path');
	var filteredFiles = [];


	fs.readdir(dir, function (err,files){
		
		if(err){
			return callback(err, null)
		}else{
		files.forEach(function(file){
			if (path.extname(file) == '.'+filenameExtension){
				filteredFiles.push(file);
			}
		})
		return callback(null, filteredFiles);
		}
	})
}

/*

Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
solution.js:

    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]
    
    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err)
    
      list.forEach(function (file) {
        console.log(file)
      })
    })

────────────────────────────────────────────────────────────────────────────────
solution_filter.js:

    var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
    
      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err)
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }


*/