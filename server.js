let express = require('express');
let app =express();

//set port
let port = process.env.PORT || 8080;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.static(__dirname+'/dist/stmark'));

//routes
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/dist/stmark/index.html'));
});
app.listen(port)

