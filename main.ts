input.onButtonPressed(Button.A, function () {
    music.setTempo(120)
    music.playTone(659, music.beat(BeatFraction.Quarter))
    basic.pause(1000)
    music.setTempo(237)
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    basic.pause(1000)
    music.changeTempoBy(70)
    music.playTone(523, music.beat(BeatFraction.Double))
    basic.pause(100)
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(131, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
	
})
