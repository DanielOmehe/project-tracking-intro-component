const menuBtn = document.querySelector('.hamburger-btn'),
menuCloseBtn = document.querySelector('.close-btn'),
mobile_menu = document.querySelector('.project-mobile-menu');

menuBtn.addEventListener('click', ()=>{
    menuBtn.style.display = 'none';
    menuCloseBtn.style.display = 'block';
    mobile_menu.classList.add('active')
})

menuCloseBtn.addEventListener('click', ()=>{
    menuBtn.style.display = 'block';
    menuCloseBtn.style.display = 'none';
    mobile_menu.classList.remove('active')
})