let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    Menunavbar.classList.remove('active');

}


let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle('active');
    search.classList.remove('active');
    user.classList.remove('active');
    Menunavbar.classList.remove('active');

}

let user = document.querySelector('.user');

document.querySelector('#user-icon').onclick = () =>{
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    Menunavbar.classList.remove('active');
}

let Menunavbar = document.querySelector('.Menu-navbar');

document.querySelector('#menu-icon').onclick = () =>{
    Menunavbar.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}

window.onscroll = () => {
    search.classList.remove('active');
    cart.classList.remove('active');
    user.classList.remove('active');
    Menunavbar.classList.remove('active');
}

//navbar
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow',window.scrollY > 0);
})