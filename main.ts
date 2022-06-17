radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Square)
    basic.showString(receivedString)
    basic.pause(5000)
    serial.redirectToUSB()
    serial.writeLine(receivedString)
    basic.showIcon(IconNames.SmallSquare)
})
radio.setGroup(1)
let infunk1 = 0
basic.pause(5000)
