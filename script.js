let menuBtn = document.querySelector("#menu-btn");
let navBar = document.querySelector("header nav");



let slides = document.querySelectorAll(".slide");
let backBtn = document.querySelector("#back");
let nextBtn = document.querySelector("#next");


let submit1 = document.getElementById("sub1");
let submit2 = document.getElementById("sub2");
let submit3 = document.getElementById("sub3");

let badge = document.querySelector(".badge");
let badgeMsg = document.querySelector(".badge span");



let currentSlide = 0;


window.onload = () => {
    updateSlide()

    menuBtn.addEventListener('click', () => {
        console.log("hello");
        navBar.classList.toggle("show");
    })
    
    nextBtn.addEventListener("click", () => {
        if (currentSlide < slides.length) {
            currentSlide++;
            updateSlide();
        } else {
            updateSlide()
        }

    });

    backBtn.addEventListener("click", () => {
        console.log("hello")
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide();
        } else {
            updateSlide()
        }

    });

    submit1.addEventListener("click", ()=>{
        let ans = document.getElementById("ans1");
        if (ans.value == ".js"){
           correctBage();
        }else{
            badge.classList.remove("fa-circle");
            badge.classList.remove("fa-circle-check");
            badge.classList.add("fa-circle-xmark");
            badgeMsg.innerHTML = " wrong";
            
        }
    })
}


function correctBage(){
    badgeMsg.innerHTML = " correct";
    badgeMsg.style.color = "green";
    badge.style.color = "green";
    badge.classList.remove("fa-circle");
    badge.classList.remove("fa-circle-xmark");
    badge.classList.add("fa-circle-check");
    
}

function updateSlide() {
    slides[currentSlide].classList.add("show");
    for (let i = 0; i < slides.length; i++) {
        if (i != currentSlide) {
            slides[i].classList.remove("show");
        }
    }
}


