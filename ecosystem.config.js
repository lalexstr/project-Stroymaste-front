module.exports = {
    apps: [
        {
            name: 'stroymasterFrontend',
            script: 'node_modules/.bin/vite',
            args: 'preview --port 5173 --host',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '300M',
            env: {
                NODE_ENV: 'production'
            },
            error_file: 'logs/frontend-error.log',
            out_file: 'logs/frontend-out.log',
            time: true
        }
    ]
};