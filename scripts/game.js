var texSize = 320
var x = 0.5 * (900 - Moon.size)
var y = 0.5 * (600 - Moon.size)

var moon = new Moon
var rocketSys = new RocketSystem
var moonBuf = R1.createImageData(Moon.size, Moon.size)

var offset = texSize, then = Date.now(), diff

function r() {
    offset -= (diff = Date.now() - then) / 24
    then += diff
    while (offset < 0)
        offset += texSize
    moon.render(moonBuf.data, offset)
    requestAnimationFrame(r)
    R1.putImageData(moonBuf, x, y)

    R2.clearRect(-x0, -y0, 900, 600)
    rocketSys.render(diff)
}

$id('hamas').addEventListener('click', rocketSys.add.bind(rocketSys), false)

r()
