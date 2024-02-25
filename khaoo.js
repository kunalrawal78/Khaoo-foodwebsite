let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick=()=>
{
    menu.classList.toggle('#menu-icon');
navbar.classList.toggle('active');

};

window.onscroll = () => {
    navbar.classList.remove("active");
};

