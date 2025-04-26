const path=require('path')

const filePath=path.join("/home","user","projects","app.js")
console.log("filepath:",filePath)

const baseName=path.basename(filePath)
console.log("base name:",baseName)

const dirName=path.dirname(filePath)
console.log("dir name:",dirName)

const extname=path.extname(filePath)
console.log("extension name:",extname)

