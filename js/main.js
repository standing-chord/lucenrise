// smooth scroll

document.querySelectorAll(".menu a").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});


// header hide show

let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {

let currentScroll = window.pageYOffset;

if(currentScroll > lastScroll){

header.classList.add("header-hide");

}else{

header.classList.remove("header-hide");

}

lastScroll = currentScroll;

});


// fade in animation

const faders = document.querySelectorAll(".fade");

const appearOptions = {

threshold:0.3

};

const appearOnScroll = new IntersectionObserver(function(entries){

entries.forEach(entry => {

if(!entry.isIntersecting){
return;
}

entry.target.classList.add("show");

});

}, appearOptions);

faders.forEach(fader => {

appearOnScroll.observe(fader);

});
