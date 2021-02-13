var container = document.getElementById('container');

function countdown (initial=10, final=0, interval=1){
  var current = initial 
  while(current>final){
    container.innerHTML = current.toString()
    current -= interval
  }
}