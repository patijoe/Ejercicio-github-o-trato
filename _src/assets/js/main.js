'use strict';


const btn = document.querySelector('.btn');
const list = document.querySelector('.list');
const win = document.querySelector('HTML');

function request () {
  const field = document.querySelector('.field');
  list.innerHTML = ''; 
  fetch (`https://api.github.com/users/${field.value}`)
    .then (response => response.json())
    .then (data => {
      console.log(data)
      // Nombre completo del usuario
      const completeName = data.name;
      console.log(completeName);

      if (data.name === null) {
        const advise = document.querySelector('.advise');
        const newContent2 = document.createTextNode('Ya estás tardando en poner tu nombre en Github');
        advise.appendChild(newContent2);
      } else {
        // convierto en un array el nombre con los apellidos
        const nameSurname = completeName.split(' ');
        console.log(nameSurname);

        // Selecciono el primer elemento q corresponde con el nombre
        const name = nameSurname[0];
        console.log(name);

        // Separo el nombre en letras
        const letters = name.split('');
        console.log(letters);

        for (let i=0; i<letters.length; i++) {
          // Creo elemento li
          const newItem = document.createElement(`li`);
          // Creo contenido
          const newContent = document.createTextNode(letters[i]);
          //Meto contenido dentro de li
          newItem.appendChild(newContent);
          // Meto li dentro de ol
          list.appendChild(newItem);
          console.log(newItem);
        }
      }
    });
}

function pressEnter () {
  if (event.keyCode === 13) {
    request();
    console.log(event.keyCode);
  }
}

btn.addEventListener('click', request);
win.addEventListener('keypress', pressEnter);