var events=require('events');
var eventEmitter=new events.EventEmitter();
var connectHandler = function connected()
    {
      console.log("Event Handler is made");
    }
    eventEmitter.on('connection','connectHandler');
    eventEmitter.emit('connection');
    console.log("Program Ended");