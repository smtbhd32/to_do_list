function gotTime() {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var today = new Date();
  var d = today.getDate();
  var mo = today.getMonth();
  var y = today.getFullYear();
  var h = today.getHours();
  var m = today.getMinutes();
  if (m < 10) {
    m = "0" + m;
  }
  var day = months[mo] + " " + d + ", " + y + " ";
  document.getElementById("myclock").innerHTML = day + h + ":" + m;
}
window.onload = function () {
  gotTime();
  setInterval(gotTime, 10000);
};
