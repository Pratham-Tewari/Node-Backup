var express=require('express');
var mysql=require('mysql');
var app=express();
var connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        database:'test',
        password:'MariaDB'
    });

    connection.connect(function(err)
    {
        if(!err)
        {
            console.log("CONNECTED TO DATABSE SUCCESFULLY");
        }
        else
        {
            console.log("THERE IS SOME ERROR OCUURED");
        }
    });

    app.delete("/:id",function(req,res)
    { connection.end();
        connection.query("Delete from employeedetails where EmpId=?",[req.params.id],function(err,rows,fields)
        {
            connection.end();
            if(!err)
            {
                console.log("SELECTED ROW IS DELETED SUCCESFULLY");
            }
            else 
            {
                console.log("THERE IS SOME ERROR");
            }
        });
    }).listen(3000);
    console.log('SERVER IS LISTENING TO PORT NO:3000');