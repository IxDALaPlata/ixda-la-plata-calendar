const aload = require('aload')
const offline = require('./common/offline')
const safariLinks = require('./common/safari-links')
const serviceWorker = require('./common/service-worker')

window.addEventListener('load', () => {
    aload()
    offline()
    safariLinks()
    serviceWorker()
})