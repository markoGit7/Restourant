const respnav = document.getElementById("nav");
const visible = document.querySelector(".regular");

respnav.addEventListener("click", function(){ 
    respnav.classList.toggle("active");
    visible.classList.toggle("active");
});

/* Cart inbox activation js*/

const cart = document.querySelector(".cart-button");
const inbox = document.querySelector(".inbox");

cart.addEventListener("click", function(){ 
    cart.classList.toggle("active");
    inbox.classList.toggle("active");
});