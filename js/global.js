!function n(e,t,o){function i(s,c){if(!t[s]){if(!e[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=t[s]={exports:{}};e[s][0].call(d.exports,function(n){var t=e[s][1][n];return i(t||n)},d,d.exports,n,e,t,o)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(n,e,t){"use strict";function o(){var n=document.querySelector("#menu [href='"+window.location.pathname+"']");n&&n.classList.add("current-page")}function i(){s=document.querySelector("#close-menu"),c=document.querySelector("#menu"),a=document.querySelector("#open-menu")}function r(){s.classList.toggle("dn"),c.classList.toggle("dn"),c.classList.toggle("fade-in"),a.classList.toggle("dn")}var s=void 0,c=void 0,a=void 0;e.exports=function(){i(),a.addEventListener("click",r),s.addEventListener("click",r),o()}},{}],2:[function(n,e,t){"use strict";function o(){var n=navigator.onLine?"Estás conectado":"Estás desconectado",e=navigator.onLine?"success":"info";i(n,e)}var i=n("./toast.js");e.exports=function(){window.addEventListener("offline",o),window.addEventListener("online",o)}},{"./toast.js":5}],3:[function(n,e,t){"use strict";e.exports=function(){if("standalone"in window.navigator&&window.navigator.standalone){var n;document.addEventListener("click",function(e){for(n=e.target;"A"!==n.nodeName&&"HTML"!==n.nodeName;)n=n.parentNode;"href"in n&&-1!==n.href.indexOf("http")&&-1!==n.href.indexOf(document.location.host)&&(e.preventDefault(),document.location.href=n.href)},!1)}}},{}],4:[function(n,e,t){"use strict";var o=n("./toast.js");e.exports=function(){navigator.serviceWorker&&navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(function(n){n.onupdatefound=function(){var e=n.installing;e.onstatechange=function(){if("installed"===e.state){var n=navigator.serviceWorker.controller?"Nueva versión disponible":"El contenido está disponible sin conexión",t=navigator.serviceWorker.controller?"info":"success";o(n,t)}}}})}},{"./toast.js":5}],5:[function(n,e,t){"use strict";function o(){r=document.querySelector("#js-toast")}function i(){window.location.reload()}var r=void 0;e.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";o();var t=document.createElement("div");t.className="toast__msg toast__msg--"+e,t.textContent=n,t.onclick=i,r.appendChild(t),t.addEventListener("transitionend",function(n){n.target.parentNode.removeChild(n.target)}),setTimeout(function(){t.classList.add("toast__msg--hide")},5e3)}},{}],6:[function(n,e,t){"use strict";var o=n("./common/menu"),i=n("./common/offline"),r=n("./common/safari-links"),s=n("./common/service-worker");window.addEventListener("load",function(){o(),i(),r(),s()})},{"./common/menu":1,"./common/offline":2,"./common/safari-links":3,"./common/service-worker":4}]},{},[6]);