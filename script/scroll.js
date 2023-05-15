var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 100) {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)"
  }
  else {
    nav.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
  }
})