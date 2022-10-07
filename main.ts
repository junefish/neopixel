let strip = neopixel.create(DigitalPin.P2, 60, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showRainbow(1, 360)
})
