// smooth scroll

document.querySelectorAll(".menu a").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){
target.scrollIntoView({
behavior:"smooth"
});
}

});

});


// header hide show

let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {

let currentScroll = window.pageYOffset;

if(currentScroll > lastScroll && currentScroll > 100){

header.classList.add("header-hide");

}else{

header.classList.remove("header-hide");

}

lastScroll = currentScroll;

});


// fade in animation

const faders = document.querySelectorAll(".fade");

faders.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
});

const observer = new IntersectionObserver((entries, observer) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.transition = "all 1s ease";
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

observer.unobserve(entry.target);

}

});

},{
threshold:0.3
});

faders.forEach(el => observer.observe(el));
