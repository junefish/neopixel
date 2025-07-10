let strip = neopixel.create(DigitalPin.P2, 50, NeoPixelMode.RGB)
basic.forever(function () {
    strip.setBrightness(30)
    strip.showRainbow(1, 360)
    while (true) {
        strip.rotate(1)
        strip.show()
        basic.pause(50)
    }
})
