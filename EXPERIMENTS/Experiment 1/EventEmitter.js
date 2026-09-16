const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("greet", (name) => {
    console.log("Hello, " + name + "!");
});

myEmitter.on("exit", () => {
    console.log("Exit event triggered.");
});

myEmitter.emit("greet", "Saransh");
myEmitter.emit("exit");