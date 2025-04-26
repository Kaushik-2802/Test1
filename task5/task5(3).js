const { dir } = require('console')
const fs=require('fs')
const path=require('path')

const dirpath=path.join(__dirname,'myproject')

if(!fs.existsSync(dirpath)){
    fs.mkdirSync(dirpath,{recursive:true})
    console.log(`directory created at:${dirpath}`)
}else{
    comsole.log(`directory already exists at:${dirpath}`)
}

const txtfilepath=path.join(dirpath,'sample.txt')
const txtcontent='this is a sample text file.'

fs.writeFileSync(txtfilepath,txtcontent,'utf-8')
console.log(`txt file created at:${txtfilepath}`)

const jsonpath=path.join(dirpath,'sample.json')
const jsoncontent={
    name:"abc",
    age:20,
    city:"HYD"
}

fs.writeFileSync(jsonpath,JSON.stringify(jsoncontent),'utf-8')
console.log(`json file created at:${jsonpath}`)