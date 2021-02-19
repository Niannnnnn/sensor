radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
radio.setGroup(1)
basic.forever(function () {
    if (input.lightLevel() >= 0 && input.lightLevel() <= 10) {
        radio.sendNumber(1)
    }
    if (input.lightLevel() > 10 && input.lightLevel() <= 255) {
        radio.sendNumber(0)
    }
})
