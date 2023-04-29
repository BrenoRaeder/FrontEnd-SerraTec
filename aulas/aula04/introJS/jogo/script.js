const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const o1 = document.querySelector('.o1');
const ptos1 = document.querySelector('.ptos1');
const ptos2 = document.querySelector('.ptos2');

let o1_x = 500;
let o1_y = 50;
let o1_velX = -1;
let o1_velY = 0;

let p1_y = 0;
let p1_x = 0;
let p1_largura = 20;
let p1_altura = 60;

let p2_y = 0;
let p2_x = 1015;
let p2_largura = 20;
let p2_altura = 60;

let ptos_p1 = 0;
let ptos_p2 = 0;



document.addEventListener('keydown', function(e) {
  
  console.log(e.key);
  if(e.key === 'ArrowUp' && p1_y < 400){
    p1_y += 20;
  }
  if(e.key === 'ArrowDown' && p1_y > 0){
    p1_y -= 20;
  }

  p1.style.bottom = `${p1_y}px`;
  // console.log("x" + p1_x);
  // console.log("y" + p1_y);
})

setInterval(() => {

  //colisão bola com p1
  if(o1_x <= p1_largura && (o1_y < (p1_altura + p1_y) &&  o1_y > p1_y)) {
    o1_velX *= -1;

    //altura da bola batendo maior que a metade da barra
    if(o1_y > (p1_altura / 2) + p1_y ) {
      o1_velY = 1;
    } else if(o1_y < (p1_altura / 2) + p1_y){
      o1_velY = -1;
    } else {
      o1_velY = 0;
    } 
  }

  //colisão bola com p2
  if(o1_x >= (1015 - p2_largura) && (o1_y <= (p2_altura + p2_y) &&  o1_y >= p2_y)) {
    o1_velX *= -1;

    //altura da bola batendo maior que a metade da barra
    if(o1_y > (p2_altura / 2) + p2_y ) {
      o1_velY = 1;
    } else if(o1_y < (p2_altura / 2) + p2_y){
      o1_velY = -1;
    } else {
      o1_velY = 0;
    } 
  }

  //colissão parede
  if(o1_y <= 0 || o1_y >= 440) {
    o1_velY *= -1;
  }

  if(o1_x > 1020) {
    o1_x = 510;
    o1_y = 200;
    p2_y = 200;
    o1_velX *= -1;
    ptos_p1 ++;
  }

  if(o1_x < 0) {
    o1_x = 510;
    o1_y = 200;
    p2_y = 200;
    o1_velX *= -1;
    ptos_p2 ++;
  }

  o1_x += 3 * o1_velX;
  o1_y += 1 * o1_velY;
  let prob = Math.floor(Math.random() * 1000);
  if(prob < 980) p2_y += 1 * o1_velY;
  else if(prob > 990) p2_y += 2 * o1_velY;
  else p2_y -= 2 * o1_velY;

  o1.style.left = `${o1_x}px`;
  o1.style.bottom = `${o1_y}px`;
  if(p2_y > 0 && p2_y <440)
    p2.style.bottom = `${p2_y}px`;
  ptos1.innerText = `${ptos_p1}`;
  ptos2.innerText = `${ptos_p2}`;
}, 10)





