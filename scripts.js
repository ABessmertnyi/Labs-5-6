let controlBtm = document.getElementById('button_m');
let esc = document.getElementById('esc')

controlBtm.onclick = function(e) {
    esc.className = 'menu'
}


let controlBottom = document.getElementById('button_menu');
controlBottom.onclick =  function(e) {
    esc.className = 'header_menu'
}



/*
let custom_video = document.getElementById("custom_video");

custom_video.onmouseenter = function (e) {
    controlBtm.style['display'] = 'block'
}

custom_video.onmouseleave = function (e) {
    controlBtm.style['display'] = 'none'
}*/