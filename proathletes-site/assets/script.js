// Barre de nav qui se fige au scroll
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => nav.classList.toggle('stuck', window.scrollY > 40), {passive:true});
}

// Animation "reveal" au scroll
function checkReveals(){
  document.querySelectorAll('.sr').forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 30) el.classList.add('in');
  });
}
window.addEventListener('scroll', checkReveals, {passive:true});
window.addEventListener('DOMContentLoaded', checkReveals);
