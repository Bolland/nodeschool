var picture = require('cat-picture')
var remote = require('electron').remote
var fs = require('fs')


//get source + remove picture
var src = picture.src
picture.remove()

var image = require('lightning-image-poly')

var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'})


function save () {
       remote.getCurrentWindow().webContents.printToPDF({
         portrait: true
       }, function (err, data) {
         fs.writeFile('electron-pdf-export.pdf', data, function (err) {
           if (err) alert('There was an error generating your PDF! ' + err.message)
           else alert('PDF successfully saved!')
         })
       })
     }



window.addEventListener('keydown', function (e) {
   if (e.keyCode == 80) save()
 })
