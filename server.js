var express = require('express');
var app =express();

//set port
var port = process.env.PORT || 8080

app.use(express.static(__dirname+'/dist/stmark'));

//routes
app.get("/*",(req,res)=>{
    resp.sendFile(__dirname+'/dist/stmark/index.html');
});
app.listen(port,function(){
    console.log("we are live");
})