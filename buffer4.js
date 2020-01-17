var buffer1=new Buffer("Pratham ");
var buffer2=new Buffer("Tewari");
var buffer3=Buffer.concat([buffer1, buffer2]);
console.log("MY name is : "+buffer3.toString());
var leng=buffer3.len();
console.log(leng);