var fs=require('fs');
fs.appendFile('Appendfile.html','Please find the appended file ', function(err)
{
    if(err) throw err;
    console.log("Data saved sucessfully!!!");
});