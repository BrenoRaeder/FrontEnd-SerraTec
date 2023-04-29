const ex1 = document.querySelector('#ex1');

let fotoEx01 = false;

ex1.addEventListener('click', () => {
  if(!fotoEx01) {
    ex1.innerHTML = '<img src="https://pbs.twimg.com/media/Ep7eduPW4AQZqJr.jpg">';
    fotoEx01 = true
  } else {
    ex1.innerHTML = '<h2>1.Clique nessa frase para ver o efeito do innerHTML.</h2>'
    fotoEx01 = false;
  }
})
