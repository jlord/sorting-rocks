console.log("HI APP.JS")
var fs = require('fs')
var path = require('path')

aPhoto("/Users/jlord/TestPictures")

function aPhoto(dir) {
  dir = dir || "/Users/jlord/Pictures"
  var files = fs.readdirSync(dir)
  document.querySelector('.a-photo').innerHTML = "<img src='" + path.join(dir, files[2]) + "'>"
}
