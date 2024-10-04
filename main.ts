let strip = neopixel.create(DigitalPin.P2, 240, NeoPixelMode.RGB)
basic.forever(function () {
    strip.setBrightness(40)
    strip.showRainbow(1, 360)
    while (true) {
        strip.rotate(1)
        strip.show()
        basic.pause(50)
    }
})
