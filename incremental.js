var auto_counter = 1;

function doClick(){
  var iq = document.querySelector('#iq');
  iq.innerHTML = parseInt(iq.innerHTML) + 1;
}

function update(){
  var iq = document.querySelector('#iq');
  iq.innerHTML = parseInt(iq.innerHTML) + auto_counter * 10;
}

document.querySelector('#study').addEventListener('click', doClick, false);

setInterval(update, 1000);

