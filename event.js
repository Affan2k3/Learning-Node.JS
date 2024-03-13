const EventEmitter = require("events")



const Logger = require('./logger.js')
const logger = new Logger()

//  Register a listener

logger.addListener("message", (arg) => {
    console.log("HELLO", arg)
})

logger.log("message")
