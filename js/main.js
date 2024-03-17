const respnav = document.getElementById("nav");
const visible = document.querySelector(".regular");

respnav.addEventListener("click", function(){ 
    visible.classList.add("active");
});
