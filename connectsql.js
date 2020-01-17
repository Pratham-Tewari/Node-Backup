var express=require('express');
var app=express();
var mysql=require('mysql');

var connection=mysql.createConnection(
{
  host:'localhost',
  user:'root',
  password:'MariaDB',
  database:'test'
});
 
connection.connect(function(err)
{
    if(!err)
    {
        console.log("CONNECTED SUCCESFULLY");
    }
    else
    {
        console.log('THERE IS SOME ERROR');
    }
});

app.get("/",function(req,res)
{
    connection.query("Select * from employeedetails",function(err,rows,fields)
    {
        connection.end();
        if(!err)
        {
        console.log("DETAILS ARE AS FOLLOWS: ",rows);
        res.json(rows);
        }
        else{
            console.log("ERROR")
        }
    });
}).listen(3000);
console.log('SERVER IS LISTENING TO PORT NO:3000');