//Observer Pattern

class Subject {
    constructor() {
        this.observers = {};
    }

    on(event, fn) {  //function is a keyword this is why we use fn
        if (this.observers[event]) {
            this.observers[event].push(fn);
        } else {//if not exist we register
            this.observers[event] = [fn];
        }
    }

    emit(event, message) {
        if (this.observers[event]) {
            this.observers[event].forEach(fn => fn(message));
        }
    }
}


const subject = new Subject();
subject.on('eat', console.log); // register an observer  after this we have { 'eat': [console.log] }
subject.on('study', console.log); // register an observer  after this line { 'eat': [console.log], 'study': [console.log] }

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo); // { 'eat': [console.log, function foo(msg){...}], 'study': [console.log] }
subject.on('study', foo);//{ 'eat': [console.log, function foo(msg){...}], 'study': [console.log], function foo(msg){...} }
//this is object literal on this.observers

subject.emit('eat', 'Corn'); //event is eat, message is corn
//output for Line above: subject.emit('eat', 'Corn');
// Corn  -- inside eat is console.log this logs Corn
// foo: Corn -- inside eat is function foo which logs Corn
subject.emit('study', 'cs445');
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445