var fs=require('fs');
var data="Hi Pratham!";
var writestream=fs.createWriteStream('output.txt');
writestream.write(data,'UTF8');
writestream.end();
writestream.on('finish',function()
{
    console.log("DATA IS WRITTEN");
});
writestream.on('error',function()
{
    console.log(err.stack);
});
console.log("PROGRAM ENDED");