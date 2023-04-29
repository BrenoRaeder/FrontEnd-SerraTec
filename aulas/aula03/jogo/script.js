const p1 = document.querySelector('.p1');
const o1 = document.querySelector('.o1');

let o1_x = 500;
let o1_y = 50;

let p1_x = 0;
let p1_y = 0;
let p1_largura = 20;
let p1_altura = 20;

let cima = false,
    baixo = false,
    esq = false,
    dir = false;



document.addEventListener('keydown', function(e) {
  
  console.log(e.key);
  if(e.key === 'ArrowUp' && p1_y < 410){
    if(!baixo && !cima)
      trocaDirecao();
    cima = true;
    baixo = false;
    esq = false;
    dir = false;
    
  }
  if(e.key === 'ArrowDown' && p1_y > 0){
    if(!cima && !baixo) 
      trocaDirecao();
    cima = false;
    baixo = true;
    esq = false;
    dir = false;
    
  }
  if(e.key === 'ArrowLeft' && p1_x > 0){
    if(!esq && !dir)
      trocaDirecao();
    cima = false;
    baixo = false;
    esq = true;
    dir = false;
    
  }
  if(e.key === 'ArrowRight' && p1_x < 1010){
    if(!esq && !dir)
      trocaDirecao();
    cima = false;
    baixo = false;
    esq = false;
    dir = true;
  }

  // p1.style.bottom = `${p1_y}px`;
  // p1.style.left = `${p1_x}px`;
  // console.log("x" + p1_x);
  // console.log("y" + p1_y);
})

setInterval(() => {
  if(dir && p1_x < 1010) {
    p1_x += 10;
  }
  if(esq && p1_x > 0) {
    p1_x -= 10;
  }
  if(cima && p1_y < 410) {
    p1_y += 10;
  }
  if(baixo && p1_y > 0) {
    p1_y -= 10;
  }

 

  if(p1_x == o1_x && p1_y == o1_y) {
    p1_largura += 20;
  }

  p1.style.bottom = `${p1_y}px`;
  p1.style.left = `${p1_x}px`;
  p1.style.width = `${p1_largura}px`;
  p1.style.height = `${p1_altura}px`

  // console.log("x" + p1_x);
  // console.log("y" + p1_y);
}, 100)

function trocaDirecao() {
  let aux = p1_altura;
  p1_altura = p1_largura;
  p1_largura = aux;
}




