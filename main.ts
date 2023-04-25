let Temperatura = 0
let Luz = 0
basic.pause(100)
basic.forever(function () {
    if (input.lightLevel() >= 90) {
        Luz = 1
    }
    if (input.lightLevel() < 90) {
        Luz = 0
    }
})
basic.forever(function () {
    if (input.temperature() < 10) {
        Temperatura = 0
    }
    if (input.temperature() >= 10 && input.temperature() <= 20) {
        Temperatura = 1
    }
    if (input.temperature() > 20) {
        Temperatura = 2
    }
})
basic.forever(function () {
    if (Luz == 0 && Temperatura == 0) {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(1000)
    } else if (Luz == 0 && Temperatura == 1) {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.showString("OK")
    } else if (Luz == 0 && Temperatura == 2) {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(1000)
    } else if (Luz == 1 && Temperatura == 0) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Chessboard)
            basic.pause(100)
            basic.showIcon(IconNames.Square)
            basic.pause(100)
        }
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(1000)
    } else if (Luz == 1 && Temperatura == 1) {
    	
    } else if (false) {
    	
    }
})
