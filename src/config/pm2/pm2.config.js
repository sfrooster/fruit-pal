module.exports = {
    apps: [
        {
            name: 'fruit-pal',
            script: 'dist/server.js',
            stop_exit_codes: [0],
            watch: false,
            error_file: 'dist/logs/err.log',
            out_file: 'dist/logs/out.log',
            time: false,
            instances: 2, // limit instances
            exec_mode: 'cluster',
            env_development: {
                FRUIT_PAL_SERVR_PORT: 4226,
                LOG_LEVEL: 'debug', // should be ties to a shared constant/enum
                NODE_ENV: 'development'
            },
            env_production: {
                FRUIT_PAL_SERVR_PORT: 8080,
                LOG_LEVEL: 'info', // should be ties to a shared constant/enum
                NODE_ENV: 'production'
            }
        }
    ]
}