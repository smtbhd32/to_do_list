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
  var day = months[mo] + " " + d + ", " + y + " " + " " + " ";
  document.getElementById("myclock").innerHTML = day + h + ":" + m;
}

let id = localStorage.getItem("max");
if (localStorage.getItem("max") === null) {
  id = 1;
}
function add() {
  const person = {
    tasks: document.getElementById("task").value,
    vals: document.getElementById("val").checked,
  };
  document.getElementById("task").value = "";
  window.localStorage.setItem(id, JSON.stringify(person));
  id++;
  window.localStorage.setItem("max", id);
}
function display() {
  if (id != 1) {
    document.getElementById("dynamic").innerHTML = "";
  }
  for (let i = 1; i < id; i++) {
    const prsn = JSON.parse(window.localStorage.getItem(i));
    if (prsn === null) {
      continue;
    }

    //box
    const box = document.createElement("li");
    box.setAttribute("id", "c" + i);
    document.getElementById("dynamic").appendChild(box);
    //checkbox
    const val = document.createElement("input");
    val.setAttribute("type", "checkbox");
    val.checked = prsn.vals;
    val.setAttribute("id", "b" + i);
    val.setAttribute("data-id", i);
    val.setAttribute("onclick", "check(this.id)");
    document.getElementById("c" + i).appendChild(val);
    //task
    const task = document.createElement("label");
    task.innerHTML = " " + prsn.tasks + " ";
    task.setAttribute("for", "b" + i);
    document.getElementById("c" + i).appendChild(task);
    //remove
    const rm = document.createElement("button");
    rm.innerHTML = "X";
    rm.setAttribute("class", "deletion");
    rm.setAttribute("id", i);
    rm.setAttribute("onclick", "del(this.id)");
    document.getElementById("c" + i).appendChild(rm);
  }
}
function del(rid) {
  const x = document.getElementById("c" + rid);
  x.innerHTML = "";
  x.setAttribute("style", "border: 0px !important;; margin: 0px !important; padding: 0px !important;");
  window.localStorage.removeItem(rid);
}
window.onload = function () {
  gotTime();
  setInterval(gotTime, 10000);
  display();
};
function check(cid) {
  var ele = document.getElementById(cid);
  var nid = ele.getAttribute('data-id');
  const prsn = JSON.parse(window.localStorage.getItem(nid));
  if (prsn.vals === true) {
    prsn.vals = false;
  }
  else
  {
    prsn.vals = true;
  }
  window.localStorage.setItem(nid, JSON.stringify(prsn));
}
