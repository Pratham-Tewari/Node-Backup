var events=require('events');
var eventEmitter=new events.EventEmitter();

var listener1= function listener1()
{
    console.log("Listener1 is added")
}
var listener2=function listener2()
{
    console.log("Listener2 is added");
}

eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

var eventListener=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log("No of listeners: " +eventListener);

eventEmitter.emit('connection');
console.log("PROGRAM ENDED");