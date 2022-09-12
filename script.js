const text = document.querySelector('#carta-texto');
const letter = document.querySelector('#carta-gerada');

const btnText = document.createElement('button');
document.querySelector('.inputs').appendChild(btnText);
btnText.setAttribute('type', 'button');
btnText.id = 'criar-carta';

function insert() {
  letter.innerHTML = text.value.replace(/(\S+)/gm, '<span>$1</span>');
}
btnText.addEventListener('click', insert);
