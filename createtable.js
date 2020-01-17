var express=require('express');
var sql=require('require');
var boyParser=require('body-parser');
var app=express();
app.use(boyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var connection=sql.createconnection(
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
            console.log("DATABSE IS CONNECTED SUCESSFULLY");
        }
        else
        {
            console.log("THERE IS SOME ERROR DURING CONNECTION");
        }
    });
    app.post("/",function(req,res)
    {
        console.log(req.body);
        connection.query("insert into employeedetails(EmpName,EmpIncome) values(?,?)",[req.body.name,req.body.income],function(err,fields,rows)
        {
            connection.end();
            if(!err)
            {
                console.log("ROWS ADDED SUCCESFULLY");
            }
            else
            {
                console.log("ERROR OCCURED");
            }
        });
    }).listen(2000);
    console.log("SERVER IS LISTENING TO PORT NO:2000");