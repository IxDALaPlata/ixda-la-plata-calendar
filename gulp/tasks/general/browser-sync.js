const browserSync = require('browser-sync')

module.exports = function(config) {
    const server = browserSync.get(config.staticServer.name)

    return function() {
        server.init({
            open: false,
            port: process.env.PORT,
            reloadOnRestart: true,
            server: config.staticServer.dir,
            host: "localhost",
            ui: false
        })
    }
}
