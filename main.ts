let pedra_papel_tesoura = 0
input.onGesture(Gesture.Shake, function () {
    pedra_papel_tesoura = randint(1, 3)
    if (pedra_papel_tesoura == 1) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            . . # # #
            . . . . .
            `)
    } else if (pedra_papel_tesoura == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (pedra_papel_tesoura == 3) {
        basic.showLeds(`
            # # . . #
            . # . # .
            . . # . .
            . # . # .
            # # . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
