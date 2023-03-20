
var gggspeduplbtn = document.querySelector("#ggg-spedup #lbtn")
var gggspedup = document.querySelector("#ggg-spedup")
var watchavid = document.querySelector("#watchavid")

var bhspeduplbtn = document.querySelector("#bh-spedup #lbtn")
var bhspedup = document.querySelector("#bh-spedup")

var gdretray1attbtn = document.querySelector("#gd-retray-1attempt #lbtn")
var gdretray1att = document.querySelector("#gd-retray-1attempt")

gggspeduplbtn.onclick = function gggspup() {
    $('#watchavid').load('https://spikerko.org/SzjBijgkuHkoXgRhpmmnpYdrMjNoPBEQvEhvmbkdJ2jg4SLUAS/ggg-spedup/ggg-spedup.html');
    gggspedup.style.display = "none"
    bhspedup.style.display = "none"
    gdretray1att.style.display = "none"
    watchavid.style.display = "block"
    document.getElementById("tit").style.display = "none"
    document.title = "Spikerko - Streamovací Servis - Green Green Grass - SpedUp - SpikeNew7774"
}

bhspeduplbtn.onclick = function bhspup() {
    $('#watchavid').load('https://spikerko.org/SzjBijgkuHkoXgRhpmmnpYdrMjNoPBEQvEhvmbkdJ2jg4SLUAS/babyhotline-spedup/bh-spedup.html');
    gggspedup.style.display = "none"
    bhspedup.style.display = "none"
    gdretray1att.style.display = "none"
    watchavid.style.display = "block"
    document.getElementById("tit").style.display = "none"
    document.title = "Spikerko - Streamovací Servis - Baby Hotline - SpedUp - SpikeNew7774"
}



gdretray1attbtn.onclick = function bhspup() {
  $('#watchavid').load('https://spikerko.org/SzjBijgkuHkoXgRhpmmnpYdrMjNoPBEQvEhvmbkdJ2jg4SLUAS/gd-retray-1attempt/gd.html');
  gggspedup.style.display = "none"
  bhspedup.style.display = "none"
  gdretray1att.style.display = "none"
  watchavid.style.display = "block"
  document.getElementById("tit").style.display = "none"
  document.title = "Spikerko - Streamovací Servis - Geometry Dash - ReTraY - 1 Attempt"
}


const img = document.querySelector("img");
img.ondragstart = () => {
  return false;
};
img.setAttribute("draggable", false);
