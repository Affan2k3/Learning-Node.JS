const EventEmitter = require("events")


var url = "jf dsj jdsl"


class Logger extends EventEmitter {

  log(message) {
        console.log(message)
        this.emit("message", { name: "AFFAN", age: 20})
    }
}




module.exports = Logger

module.exports.endpoint = url