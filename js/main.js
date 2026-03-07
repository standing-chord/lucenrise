// 메뉴 클릭 시 부드러운 스크롤

document.querySelectorAll(".menu a").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior:"smooth"
});

});

});


// header hide / show

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
