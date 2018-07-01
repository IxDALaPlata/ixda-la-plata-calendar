(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Loads images, scripts, styles, iframes, videos and audios asynchronously.
 * @param {NodeList} [nodes] - A NodeList of elements. By default, it is the result of `querySelectorAll('[data-aload]')`.
 * @returns {NodeList}
 */
module.exports = function aload(nodes) {
  'use strict';

  var attribute = 'data-aload';

  nodes = nodes || window.document.querySelectorAll('[' + attribute + ']');

  if (nodes.length === undefined) {
    nodes = [nodes];
  }

  [].forEach.call(nodes, function (node) {
    node[ node.tagName !== 'LINK' ? 'src' : 'href' ] = node.getAttribute(attribute);
    node.removeAttribute(attribute);
  });

  return nodes;
}

},{}],2:[function(require,module,exports){
'use strict';

var toast = require('./toast.js');

function updateConnectionStatus() {
    var text = navigator.onLine ? 'Estás conectado' : 'Estás desconectado';
    var theme = navigator.onLine ? 'success' : 'info';

    toast(text, theme);
}

module.exports = function offline() {
    window.addEventListener('offline', updateConnectionStatus);
    window.addEventListener('online', updateConnectionStatus);
};

},{"./toast.js":5}],3:[function(require,module,exports){
'use strict';

module.exports = function safariLinks() {
    // Mobile Safari in standalone mode
    if ('standalone' in window.navigator && window.navigator.standalone) {
        // If you want to prevent remote links in standalone web apps opening Mobile Safari, change 'remotes' to true
        var noddy,
            remotes = false;

        document.addEventListener('click', function (event) {
            noddy = event.target;

            // Bubble up until we hit link or top HTML element. Warning: BODY element is not compulsory so better to stop on HTML
            while (noddy.nodeName !== 'A' && noddy.nodeName !== 'HTML') {
                noddy = noddy.parentNode;
            }

            if ('href' in noddy && noddy.href.indexOf('http') !== -1 && (noddy.href.indexOf(document.location.host) !== -1 || remotes)) {
                event.preventDefault();
                document.location.href = noddy.href;
            }
        }, false);
    }
};

},{}],4:[function(require,module,exports){
'use strict';

var toast = require('./toast.js');

module.exports = function serviceWorker() {
    if (!navigator.serviceWorker) return;

    navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function (reg) {
        reg.onupdatefound = function () {
            var installingWorker = reg.installing;

            installingWorker.onstatechange = function () {
                if (installingWorker.state === 'installed') {
                    var text = navigator.serviceWorker.controller ? 'Nueva versión disponible' : 'El contenido está disponible sin conexión';
                    var theme = navigator.serviceWorker.controller ? 'info' : 'success';

                    toast(text, theme);
                }
            };
        };
    });
};

},{"./toast.js":5}],5:[function(require,module,exports){
'use strict';

var toastContainer = void 0;

function init() {
    toastContainer = document.querySelector('#js-toast');
}

function tapHandler() {
    window.location.reload();
}

module.exports = function toast(message) {
    var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';

    init();

    var toastMsgEl = document.createElement('div');
    toastMsgEl.className = 'toast__msg toast__msg--' + theme;
    toastMsgEl.textContent = message;
    toastMsgEl.onclick = tapHandler;

    toastContainer.appendChild(toastMsgEl);

    toastMsgEl.addEventListener('transitionend', function (event) {
        event.target.parentNode.removeChild(event.target);
    });

    setTimeout(function () {
        toastMsgEl.classList.add('toast__msg--hide');
    }, 5000);
};

},{}],6:[function(require,module,exports){
'use strict';

var aload = require('aload');
var offline = require('./common/offline');
var safariLinks = require('./common/safari-links');
var serviceWorker = require('./common/service-worker');

window.addEventListener('load', function () {
    aload();
    offline();
    safariLinks();
    serviceWorker();
});

},{"./common/offline":2,"./common/safari-links":3,"./common/service-worker":4,"aload":1}]},{},[6]);

//# sourceMappingURL=global.js.map
