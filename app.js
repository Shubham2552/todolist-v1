const express=require("express");
const bodyParser=require("body-parser")
const app=express();
var items=[];

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    var today=new Date();
    var currentDay=today.getDay();
    var day="Monday";
    var message="";

    switch(currentDay){
        case 0:day="Sunday";message="Yay! Today I will enjoy";break;
        case 1:day="Monday";message="Ohh No! I have work today";break;
        case 2:day="Tuesday";message="Ohh No! I have work today";break;
        case 3:day="Wednesday";message="Ohh No! I have work today";break;
        case 4:day="Thrusday";message="Ohh No! I have work today";break;
        case 5:day="Friday";message="Ohh No! I have work today";break;
        case 6:day="Saturday";message="Yay! Today I will enjoy";break;
    }

    
    res.render('list',{itemList:items});
})

app.post("/",function(req,res){
    var item=req.body.newItem;
    console.log(item);
    items.push(item);
    res.redirect("/");
})
app.listen(3000, function(){
    console.log("Server started on port 3000");
}) 