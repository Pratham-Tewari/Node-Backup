var express=require('express');
var path=require('path');
var app=express();
app.use(express.static('Node_Workspace'));

app.get('/form.html',function(req,res)
{
    res.sendFile(path.join(__dirname+'/form.html'));
});

app.get('/getdata',function(req,res)
{
    response=
    {
        UserName:req.query.username,
        Password:req.query.password
    };
    console.log(response);
    res.end(JSON.stringify(response))
}).listen(3000);
console.log("APP IS RUNNING IN PORT NUMBER 3000");