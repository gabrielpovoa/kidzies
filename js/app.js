const navbar = document.querySelector('.navbar');
const menuMobile = document.querySelector('#menu-bars');

window.onscroll = () => {
    navbar.classList.remove('active')
}

menuMobile.onclick = () => {
    navbar.classList.toggle('active')
}

