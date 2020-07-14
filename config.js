export default {
    /** node environment */
    env: process.env.NODE_ENV || 'development',

    /** server configurations */
    server: {
        port: process.env.PORT || 8080,
        host: '0.0.0.0'
    },

    /** API configurations */
    api: {
        prefix: '/api'
    },

    /** Logging configuration */
    logging: {
        level: 'info',
        error_file: '/var/tmp/mskirana-error.log',
        debug_file: '/var/tmp/mskirana-debug-log',
    },

    /** database configuration */
    db: {
        username: process.env.MONGO_USERNAME || "root",
        password: process.env.MONGO_PASSWORD || "password",
        hostname: process.env.MONGO_HOSTNAME || "mongo",
        port: process.env.MONGO_PORT || 27017,
        db: process.env.MONGO_DB || "db",
        options: {
            useCreateIndex: true,
            useNewUrlParser: true,
            reconnectTries: 200,
            reconnectIntervals: 500,
            connectTimeoutMS: 10000,
        }
    }
}