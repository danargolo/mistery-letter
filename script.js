const text = document.querySelector('#carta-texto');
const letter = document.querySelector('#carta-gerada');


const btnText = document.createElement('button');
document.querySelector('.inputs').appendChild(btnText);
btnText.setAttribute('type', 'button');
btnText.id = 'criar-carta';

function insert() {
  if (text.value.match(/^(\s+)$/gm)) {
    letter.innerHTML = 'Por favor, digite o conteúdo da carta.';
    console.log(letter.innerText);
    }
  letter.innerHTML = text.value.replace(/(\S+)/gm, '<span>$1</span>');
}
  

btnText.addEventListener('click', insert);
const span = document.getElementsByTagName('span');
