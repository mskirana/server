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
    }
}