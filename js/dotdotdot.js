function dotdotdot(cursor, times, string) {
  return Array(times - Math.abs(cursor % (times * 2) - times) + 1).join(string);
}

var cursor = 0;
setInterval(function () {
  document.getElementById("output").innerHTML = dotdotdot(cursor++, 3, '.')
}, 500);
