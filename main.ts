input.onButtonPressed(Button.A, function () {
    int1 = randint(0, 10)
    int2 = randint(0, 10)
    basic.showNumber(int1)
    basic.pause(1000)
    basic.showString("x")
    basic.pause(1000)
    basic.showNumber(int2)
    basic.pause(1000)
    basic.showString("= ?")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(int1 * int2)
})
let int2 = 0
let int1 = 0
basic.showString("<-Q A->")
