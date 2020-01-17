var express=require('express');
var app=express();
var mysql=require('mysql');
var pool=mysql.createPool(
    {
        host:'localhost',
        user:'root',
        password:'MariaDB',
        database:'test',
        debug: 'false'

    });

    function handleDatabase(req,res)
    {
        pool.getConnection(function(err,connection)
        {
            if(err)
            {
                res.json({"code":100,"status":"Internal Server Error"});
                return;
            }
            console.log("NO OD DETAILS: " +connection.threadId);
            connection.query("Select * from emploeedetails",function(err,rows)
            {
                connection.release();
                if(!err)
                {
                    res.json(rows);
                }
            });
            connection.on('error',function(err)
            {
                res.json({"code":100,"status":"Internal Server Error"});
                return;
            });
        });
    }
    app.get("/",function(req,res)
    {-
        handleDatabase(req,res);
    }).listen(4000);
    console.log("SERVER IS LISTENING TO PORT NO:4000");
    