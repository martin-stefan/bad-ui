function changeColor() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  document.querySelector('body').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  
}

async function move() {
  let goTop = Math.round(Math.random() * 700);
  let goLeft = Math.round(Math.random() * 700);
  document.getElementById('clickMe').style.left = goLeft + 'px';
  document.getElementById('clickMe').style.top = goTop + 'px';
}

