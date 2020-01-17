var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res)
{
     var pathname=url.parse(req.url).pathname;
     console.log("Request for "+pathname+ " is  fetched sucessfully");

     fs.readFile(pathname.substr(1),function(err,data)
     {
         if(err)
         {
             res.writeHead(404,({'content-type':'text/html'}));
         }
         else{
            res.writeHead(200,({'content-type':'text/html'})); 
            res.write(data.toString());
         }
         res.end();
     });
}).listen(3000);
