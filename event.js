var fs=require('fs');
var readstream=fs.createReadStream('./testnode.html');
readstream.on('open',function()
{
    console.log("FILE IS OPEN");
});