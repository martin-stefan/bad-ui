function changeColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  document.querySelector('body').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  
}

async function move() {
  const goTop = Math.round(Math.random() * 700);
  const goLeft = Math.round(Math.random() * 700);
  document.getElementById('clickMe').style.left = goLeft + 'px';
  document.getElementById('clickMe').style.top = goTop + 'px';
}

const generatePhone = () => {
  const num2 = Math.floor(Math.random() * 10000);
  const num1 = Math.floor(Math.random() * 1000);
  const area = document.getElementById('areaCode');
  const opt = area.options[area.selectedIndex];
  const phoneNumber= `<h1>${opt.value}-${num1}-${num2}</h1>`;
  document.getElementById('phoneNumber').innerHTML = '';
  document.getElementById('phoneNumber').insertAdjacentHTML('beforeend', phoneNumber);
}
