function getTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  if (m < 10) {
    m = "0" + m;
  }
  document.getElementById("myclock").innerHTML = h + ":" + m;
}
window.onload = function () {
  getTime();
  setInterval(getTime, 10000);
};
