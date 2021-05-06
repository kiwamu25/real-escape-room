input.onButtonPressed(Button.A, function () {
    if (passClear != true) {
        count += 1
        if (count > 4) {
            count = 0
        }
        icons[count].showImage(0)
    } else {
        basic.showString("" + (Dialpass))
    }
})
input.onButtonPressed(Button.B, function () {
    if (passClear != true) {
        ans[NowCnt] = count
        count = 0
        NowCnt += 1
        check = true
        if (NowCnt == 5) {
            for (let index = 0; index <= 4; index++) {
                if (keywords[index] != ans[index]) {
                    check = false
                }
            }
            if (check) {
                for (let index = 0; index < 4; index++) {
                    music.playTone(659, music.beat(BeatFraction.Quarter))
                    basic.showIcon(IconNames.SmallSquare)
                    music.playTone(523, music.beat(BeatFraction.Quarter))
                    basic.showIcon(IconNames.Square)
                }
                basic.clearScreen()
                // 正解したのでダイヤルロックのパスワードを画面に表示する
                basic.showString("" + (Dialpass))
                passClear = true
            } else {
                for (let index = 0; index < 3; index++) {
                    basic.clearScreen()
                    basic.pause(100)
                    basic.showIcon(IconNames.No)
                    music.playTone(139, music.beat(BeatFraction.Quarter))
                }
                // 答えが違ったので各種値を初期化する
                Reset()
            }
        } else {
            basic.showString("" + (NowCnt + 1))
            icons[count].showImage(0)
        }
    }
})
function Reset () {
    count = 0
    NowCnt = 0
    Dialpass = 4511
    // keywords=問題の答えを設定する。
    // 0=iconA
    // 1=iconB
    // 2=iconC
    // 3=iconD
    // 4=iconE
    // 問題を増減する場合iconの数と必ず同じにすること
    keywords = [0, 1, 2, 3, 4]
    // 入力された答えを保存するListの初期化
    ans = [0, 0, 0, 0, 0]
    iconA = images.iconImage(IconNames.Duck)
    iconB = images.iconImage(IconNames.Butterfly)
    iconC = images.iconImage(IconNames.Cow)
    iconD = images.iconImage(IconNames.Snake)
    iconE = images.iconImage(IconNames.Giraffe)
    icons = [iconA, iconB, iconC, iconD, iconE]
    basic.showString("1")
    basic.pause(200)
    icons[count].showImage(0)
}
let iconE: Image = null
let iconD: Image = null
let iconC: Image = null
let iconB: Image = null
let iconA: Image = null
let keywords: number[] = []
let check = false
let NowCnt = 0
let ans: number[] = []
let Dialpass = 0
let icons: Image[] = []
let count = 0
let passClear = false
Reset()
basic.forever(function () {
	
})
