var http=require('http');
var dt=require('./date');
http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.write("Hi Pratham Tewari"+"\n");
  res.write("Current date is:"+dt.myDateTime())
  res.end();
}).listen(8000);