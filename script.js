const text = document.querySelector('#carta-texto');
const letter = document.querySelector('#carta-gerada');

const btnText = document.createElement('button');
document.querySelector('.inputs').appendChild(btnText);
btnText.setAttribute('type', 'button');
btnText.id = 'criar-carta';

const design = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotate = ['rotateleft', 'rotateright'];
const incline = ['skewleft', 'skewright'];

function removeSpan() {
  const spanSz = document.querySelectorAll('span');
  if (spanSz.length >= 1) {
    for (let index = spanSz.length - 1; index >= 0; index -= 1) {
      spanSz[index].remove();
    }
  }
}

function insert() {
  if (text.value === '' || text.value.match(/^(\s+)$/gm)) {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    letter.innerText = '';
    const phrase = text.value.trim();
    const words = phrase.split(' ');
    document.getElementById('carta-contador').innerText = words.length;
    for (let index = 0; index < words.length; index += 1) {
      const span = document.createElement('span');
      span.innerText = words[index];
      document.getElementById('carta-gerada').appendChild(span);
    }
  }
}

function sty(param) {
  const selector = Math.floor(Math.random() * param.length);
  return param[selector];
}

function spanClass() {
  const spanSz = document.querySelectorAll('span');
  for (let index = 0; index < spanSz.length; index += 1) {
    spanSz[index].className = `${sty(design)} ${sty(size)} ${sty(rotate)} ${sty(incline)}`;

    spanSz[index].addEventListener('click', () => {
      spanSz[index].className = `${sty(design)} ${sty(size)} ${sty(rotate)} ${sty(incline)}`;
    });
  }
}

btnText.addEventListener('click', () => {
  removeSpan();
  insert();
  spanClass();
});
