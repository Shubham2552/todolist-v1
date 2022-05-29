const express=require("express");
const bodyParser=require("body-parser")
const app=express();
let items=["Buy Food","Cook Food","Eat Food"];
let workItem=[];

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
    let today=new Date();
    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    let currentDay=today.toLocaleDateString("en-US",options);



    res.render('list',{itemList:items,listTitle:currentDay});
})

app.post("/",function(req,res){
    var item=req.body.newItem;
    console.log(req.body.list);
    if(req.body.list === "Work"){
        workItem.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/")
    }
    
})

app.get("/work",function(req,res){
    let today=new Date();
    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    let currentDay=today.toLocaleDateString("en-US",options);



    res.render('list',{itemList:workItem,listTitle:"Work List"});
})

app.get('/about',function(req,res){
    res.render("about");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
}) 