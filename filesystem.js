
const { error } = require("console");
const fs=require ("fs"); //filesystem se fs pakg import kya

const http =require("http");
const server = http.createServer(function(req,res){

 fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{
    res.writeHead(200,{"content-type": "text/plain"});
res.write(data);// server k opar jo response diya
    res.end()//read file dir jo k read krny kliye use hoti
if(err) throw err;//agar error ha to error ajay warna data show hojay
console.log(data);
 });

}).listen(3000,()=>console.log("server running on port 3000"));

//yaha hamny aik file jo hello.txt file ha uska content 
//sever bna kar us par show krwaya ha 