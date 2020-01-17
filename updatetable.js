var express=require('express');
var mysql=require('mysql');
var bodyParser=require('body-parser');
var app=express();
var connection=mysql.create.connection(
    {
       host:'localhost',
       user:'root',
       password:'MariaDB',
       database:'test'
    });
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    connection.connect(function(err)
    {
        if(!err)
        {
            console.log("SERVER IS CONNECTED TO DATABASE SUCCESFULLY");
        }
        else 
        {
            console.log("THERE IS SOME ERROR");
        }
    });
    app.post("/",function(req,res)
    {
     console.log(req.body);
     connection.query("Update employeedetails set EmpName=? where EmpId=?",[req.body.name,req.body.id],function(err,rows,fields)
     {
         connection.end();
         if(!err)
         {
             console.log(rows);
             res.json(rows);
         }
         else 
         {
             console.log("ERROR");
         }
     });
    }).listen(4000);
    console.log("SERVER IS LISTENING TO PORT NO:4000");