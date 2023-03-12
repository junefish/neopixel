let strip = neopixel.create(DigitalPin.P2, 60, NeoPixelMode.RGB)
basic.forever(function () {
    strip.setBrightness(160)
    strip.showRainbow(1, 360)
    while (true) {
        strip.rotate(1)
        strip.show()
        basic.pause(50)
    }
})
