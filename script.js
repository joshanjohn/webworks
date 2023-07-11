var menuBtn = document.querySelector("#menu-btn");

var navBar = document.querySelector("header nav");


menuBtn.addEventListener('click', ()=>{
    console.log("hello");
    navBar.classList.toggle("show");
})