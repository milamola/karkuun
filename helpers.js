function title(newTitle) {
  document.title = newTitle
  $("h1").text(newTitle)
}

function tell() {
  Array.prototype.slice.apply(arguments).forEach(function(message) {
    $("body").append($("<div>").addClass("message").text(message))
  })
}

function later(delay, f) {
  setTimeout(f, delay)
}

function key(keyCode, f) {
  document.addEventListener("keyup", function(event) {
    if (event.keyCode == keyCode) {
      f()
    }
  })
}

var raphael = Raphael(0,0,1000,1000)

function image(path) {
  return raphael.image(path, 0, 400, 100, 100)
}

function move(thing, x) {
  thing.animate({x : x * 50}, 100)
}
