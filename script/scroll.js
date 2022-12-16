var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 100) {
    nav.classList.add('bg-scroll-down')
  }
  else {
    nav.classList.remove('bg-scroll-down')
  }
})