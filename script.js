const angle = document.querySelector('.angle');

window.addEventListener('scroll', ()=>{
    let scroll = -10+window.scrollY/60;
    console.log(scroll )
    angle.style.transform=`skewY(${scroll}deg)`;
});