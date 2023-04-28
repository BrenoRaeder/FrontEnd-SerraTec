const p1 = document.querySelector('.p1');

let p1_x = 0;
let p1_y = 0; 

document.addEventListener('keydown', function(e) {
  
  console.log(e.key);
  if(e.key === 'ArrowUp'){
    p1_y += 10;
  }
  if(e.key === 'ArrowDown' && p1_y > 0){
    p1_y -= 10;
  }
  if(e.key === 'ArrowLeft' && p1_x > 0){
    p1_x -= 10;
  }
  if(e.key === 'ArrowRight'){
    p1_x += 10;
  }

  p1.style.bottom = `${p1_y}px`;
  p1.style.left = `${p1_x}px`;
})




