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
