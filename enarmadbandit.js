window.addEventListener('load', function(){

let btnTusen = document.getElementById('btnTusen');
let btnHundra = document.getElementById('btnHundra');
let btnTio = document.getElementById('btnTio');
let btnEntal = document.getElementById('btnEntal');
let btnTiondel = document.getElementById('btnTiondel');
let btnHundradel = document.getElementById('btnHundradel');
let btnTusendel = document.getElementById('btnTusendel');

let tusen = document.getElementById('tusen');
let hundra = document.getElementById('hundra');
let tio = document.getElementById('tio');
let ental = document.getElementById('ental');
let tiondel = document.getElementById('tiondel');
let hundradel = document.getElementById('hundradel');
let tusendel = document.getElementById('tusendel');

btnTusen.addEventListener('click', function(){
  let x = (tusen.innerText - 0);
  tusen.innerText = addOne(x);
})
btnHundra.addEventListener('click', function(){
  let x = (hundra.innerText - 0);
  hundra.innerText = addOne(x);
})
btnTio.addEventListener('click', function(){
  let x = (tio.innerText - 0);
  tio.innerText = addOne(x);
})
btnEntal.addEventListener('click', function(){
  let x = (ental.innerText - 0);
  ental.innerText = addOne(x);
})
btnTiondel.addEventListener('click', function(){
  let x = (tiondel.innerText - 0);
  tiondel.innerText = addOne(x);
})
btnHundradel.addEventListener('click', function(){
  let x = (hundradel.innerText - 0);
  hundradel.innerText = addOne(x);
})
btnTusendel.addEventListener('click', function(){
  let x = (tusendel.innerText - 0);
  tusendel.innerText = addOne(x);
})


function addOne(x){
  if(x<=0 || x<9)
    return (x+1);
  else {
    return 0;
  }
}


let decimals = document.getElementsByClassName('decimal');
let btnDecimals = document.getElementById('displayDecimals');

btnDecimals.addEventListener('click', function(){
console.log(decimals);
  if(decimals[0].style.display === 'inline-block'){
    for(i=0;i<decimals.length;i++){
      decimals[i].style.display = 'none'
    }
   btnDecimals.innerText = 'Visa decimaler'; 
  }else {
    for(i=0;i<decimals.length;i++){
      console.log(decimals[i])
      decimals[i].style.display = 'inline-block'
    }
    btnDecimals.innerText = 'Göm decimaler';
  }
})


});