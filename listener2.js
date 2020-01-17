var events=require('events');
var eventEmitter=new events.EventEmitter();

var listener1=function listener1()
{
    console.log("LISTENER1 IS ADDED");
}
var listener2=function listener2()
{
 console.log("LISTENER2 IS ADDED");
}

eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

var eventlistener=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log("No of listeners: "+eventlistener);
eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
console.log("LISTENER1 IS REMOVED");
eventlistener=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log("No of listeners: "+eventlistener);
eventEmitter.emit('connection');

console.log("PROGRAM ENDED!!!!!!!");