const express=require("express")
const fs= require("fs");
const app= new express();
const data= fs.readFileSync("testo.txt", "utf-8")
console.log(data)
