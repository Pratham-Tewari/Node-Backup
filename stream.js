var fs=require('fs');
var data=' ';

var readerStream=fs.createReadStream('teststream.txt');
readerStream.setEncoding('utf8');
readerStream.on('data',function(chunck)
{
    data +=chunck;
});
readerStream.on('end',function()
{
  console.log(data);
});
readerStream.on('error',function()
{
    console.log(err.stack);
});
console.log("PROGRAM ENDED");