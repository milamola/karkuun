title("Karkuun!!")

var L = 0
var P = 4

key(32, function() {
  P++
})

function play() {
  L++
  if (L >= P) {
    tell("you lose")
  } else if (P >= 13) {
    tell("you win")
  } else {
    later(500, play)
  }
}

play()
