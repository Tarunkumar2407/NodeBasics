const EventEmitter = require("node:events")

const event = new EventEmitter();

event.on("sayMyName", () => {
      console.log("My name is Tarun Kumar")
})

event.emit("sayMyName");