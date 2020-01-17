var buffer1=new Buffer('Pratham');
var buffer2=new Buffer("Tewari");
var len=buffer1.length;
console.log(len);
var result=buffer1.compare(buffer2);
console.log(result);
if(result<0)
{
    console.log("COMPARE VALUE IS NEGATIVE");
}
else
{
    console.log("COMPARE VALUES IS POSITIVE");
}