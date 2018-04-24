const Mousetrap = require('mousetrap')

let isna
const audio = new Audio(`${process.env.ASSETS_BASE_URL}/assets/sounds/isnardi.mp3`)

function activateEasterEgg() {
    if (!isna.classList.contains('easter-egg-ready')) {
        isna.classList.add('easter-egg-ready')
    }

    if (!isna.classList.contains('easter-egg-active')) {
        isna.classList.add('easter-egg-active')
        audio.play()

        setTimeout(() => {
            isna.classList.remove('easter-egg-active')
        }, 2900)
    }
}

module.exports = function easterEgg() {
    isna = document.querySelector('#isna')

    Mousetrap.bind('up up down down left right left right b a enter', activateEasterEgg)
}
