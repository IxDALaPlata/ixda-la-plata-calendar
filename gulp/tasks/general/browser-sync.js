const browserSync = require('browser-sync')

module.exports = function(config) {
    const server = browserSync.get(config.staticServer.name)

    return function() {
        server.init({
            open: false,
            port: util.env.port,
            reloadOnRestart: true,
            server: config.staticServer.dir,
            ui: false
        })
    }
}
