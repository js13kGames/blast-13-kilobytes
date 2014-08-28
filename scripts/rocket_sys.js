function RocketSystem() {
    this.rockets = []
}

RocketSystem.prototype.add = function () {
    var rocket = new Rocket()
    this.rockets.push(rocket)
}

RocketSystem.prototype.render = function (nap) {
    var i, len, rocket, av
    len = this.rockets.length
    av = 0.00025 * nap

    R2.setLineDash([4])
    R2.fillStyle = '#1ad6fd'
    R2.strokeStyle = '#1ad6fd'

    for (i = 0; i < len; ++i) {
        if ((rocket = this.rockets[i]).update(av)) {
            this.rockets.splice(i, 1)
            // jshint -W017
            --i
            --len
        }
        else {
            R2.beginPath()
            R2.arc(rocket.x0, rocket.y0, rocket.r, rocket.a0, rocket.a1, true)
            R2.stroke()
            R2.drawImage(rocket.tex, rocket.x - 16.5, rocket.y - 16.5)
        }
    }

}
