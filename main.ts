let pedraPapelTesoura = 0
input.onGesture(Gesture.Shake, function () {
    pedraPapelTesoura = randint(1, 3)
    if (pedraPapelTesoura == 1) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            . . # # #
            . . . . .
            `)
    } else if (pedraPapelTesoura == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            . # . # .
            . . # . .
            . # . # .
            # # . . #
            `)
    }
})
