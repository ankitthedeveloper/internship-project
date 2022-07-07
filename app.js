const express=require("express");
const bodyParser=require("body-Parser");
const ejs=require("ejs");
const app=express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res){
res.render("Url")
});
app.post("/result",function(req,res){
  const typed=req.body.TypedUrl;
  res.render("result",{shorted:typed})
})
app.listen(3000,function(){
  console.log("server is running on 3000 port");
});
