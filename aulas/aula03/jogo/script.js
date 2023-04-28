const p1 = document.querySelector('.p1');

let p1_x = 0;
let p1_y = 0; 

document.addEventListener('keydown', function(e) {
  
  console.log(e.key);
  if(e.key === 'ArrowUp'){
    p1_x += 5;
  }


  p1.style.bottom = `${p1_x}px`;
})




