let express = require('express');
let app =express();

//set port
let port = process.env.PORT || 8080;


app.use(express.static(__dirname+'/dist/stmark'));

//routes
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/dist/stmark/index.html'));
});
app.listen(port)

