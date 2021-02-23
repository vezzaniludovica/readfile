const fs= require("fs")
fs.readFile("testo.txt","utf-8",(err,data)=>{
    console.log(data)
})
console.log("piove")