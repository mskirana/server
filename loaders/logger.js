import config from '../config.js'
import winston from 'winston'

// transports_list contains whereall we need to log
const transports_list = [
    new winston.transports.File(
      {
        level: 'error',
        filename: config.logging.error_file
      }),
    new winston.transports.File(
      {
        level: 'debug',
        filename: config.logging.debug_file
      })
]

// Log to console if not in test environment
if (process.env.NODE_ENV !== 'test') {
    transports_list.push(new winston.transports.Console({ level: config.logging.level }))
}

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'HH:mm:ss DD-MM-YYYY'
        }),
        winston.format.json()
    ),
    transports: transports_list
})

export default logger