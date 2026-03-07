let isMenuScrolling = false;


// smooth scroll

document.querySelectorAll(".menu a").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

isMenuScrolling = true;

target.scrollIntoView({
behavior:"smooth"
});

header.classList.add("header-hide");

/* 스크롤 완료 후 다시 활성화 */

setTimeout(()=>{
isMenuScrolling = false;
},800);

}

});

});


// header hide show

let lastScroll = 0;
const header = document.getElementById("header");
const scrollThreshold = 150;

window.addEventListener("scroll", () => {

const currentScroll = window.pageYOffset;

if(currentScroll > lastScroll && currentScroll > scrollThreshold){

header.classList.add("header-hide");

}

else if(currentScroll < lastScroll){

header.classList.remove("header-hide");

}

lastScroll = currentScroll;

});
