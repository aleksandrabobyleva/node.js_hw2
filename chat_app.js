const EventEmitter = require("events");

const chatEmitter = new EventEmitter();

function sendMessage(user, message, emitter) {
  emitter.emit("message", user, message);
}

chatEmitter.on("message", (user, message) => {
  console.log(`${user}: ${message}`);
});

sendMessage("Макс", "Всем привет!", chatEmitter);
sendMessage("Нюша", "Привет, Макс, как дела?", chatEmitter);
sendMessage("Барон", "Как у вас погода?", chatEmitter);
