var nodemailer=require('nodemailer');

var transporter=nodemailer.createTransport(
    {
        service:'gmail',
        auth:
        {
            username:'name@gmail.com',
            password:'password'
        }

    });
    var mailoptions=
    {
        from:"send@gmail.com",
        to:"reciever@gmail.com",
        subject:"Testing mail sending through node.js",
        text:"Hi Pratham.."

    }
    transporter.sendMail(mailoptions,function(err,info)
    {
        if(err)
        {
            console.log(err);
        }
        else{
            console.log("EMAIL SENT : "+info.response);
        }
    });