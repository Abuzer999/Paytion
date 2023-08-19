const burger = document.querySelector('.burger-block__burger');
const menu = document.querySelector('.burger-block__burger-menu')
const navigation = document.querySelector('.burger-block__navigation');
const aMob = document.querySelectorAll('.burger-block__link');
const body = document.body;

menu.addEventListener('click', () => {
  navigation.classList.toggle('actives');
  body.classList.toggle('hidden')
  menu.classList.toggle('active')
  
  if (navigation.classList.contains('actives')) {
    body.style.overflow = 'hidden';
  }
  else {
    body.style.overflow = 'auto';
  }

});


aMob.forEach(e => {
  e.addEventListener('click', () => {
    navigation.classList.remove('actives');
    body.classList.remove('hidden')
    menu.classList.toggle('hidden')
  })
});



const header = document.querySelector( '.header');

window.addEventListener('scroll', () => {
  let scrollsY = window.scrollY;

  if (scrollsY >= 100) {
    header.classList.add('header__fixed')
  } else {
    header.classList.remove('header__fixed')
  }
});

