const input = document.querySelector('#input')
const menu = document.querySelector('.menu')

input.addEventListener('click', () => {
   if (input.checked === true) {
      menu.classList.add('active')
   } else {
      menu.classList.remove('active')
   }
});

