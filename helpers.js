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
