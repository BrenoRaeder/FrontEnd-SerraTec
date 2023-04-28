const fotos  = [
  'https://pbs.twimg.com/media/EvRZH1TXMAEkmkT.jpg',
  'https://pbs.twimg.com/media/DlqJGt3W4AAHZCY?format=jpg&name=large',
  'https://pbs.twimg.com/media/D0bbEkWWwAIts6O?format=jpg&name=4096x4096',
]

const foto = document.querySelector('.container');
const btn = document.querySelector('#btn');

let num = 0;

btn.addEventListener('click', () => {
  foto.style.backgroundImage = `url(${fotos[num]})`;

  num ++;
  if(num == 3) num = 0;
})