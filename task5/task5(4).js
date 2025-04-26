const fs=require('fs')

const readablestream=fs.createReadStream('sample.txt')

const writablestream=fs.createWriteStream('destination.txt')

readablestream.pipe(writablestream)

writablestream.on('finish',()=>{
    console.log("data written in destination.txt")
})

readablestream.on("error",(err)=>{
    console.log("error resding source file",err)
})

writablestream.on("error",(err)=>{
    console.log("error writing in file",err)
})

