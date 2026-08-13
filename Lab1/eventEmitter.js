import {EventEmitter} from "node:events";

const task = new EventEmitter();

const sayHi = (name) => {
    console.log(`logged in ${name}`);
};

task.on('greet',sayHi);

task.emit('greet', 'Deval Singh')