// header 요소
const header = document.getElementById("header");

// 상태 변수
let lastScroll = 0;
let isMenuScrolling = false;

// header 숨김 기준 스크롤
const scrollThreshold = 150;



// 메뉴 클릭 → smooth scroll + header 숨김

document.querySelectorAll(".menu a").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

// 메뉴 이동 상태 활성화
isMenuScrolling = true;

// 부드러운 스크롤
target.scrollIntoView({
behavior:"smooth"
});

// header 숨기기
header.classList.add("header-hide");

// 스크롤 애니메이션 끝난 후 scroll 이벤트 다시 활성화
setTimeout(() => {
  isMenuScrolling = false;
  header.classList.remove("header-hide"); // 헤더 내려오기

  // 마지막 위치를 현재 스크롤로 초기화
  lastScroll = window.pageYOffset;

  // 이동 직후 잠깐 scroll 이벤트 무시
  const ignoreScroll = true;
  setTimeout(() => {
    ignoreScroll = false;
  }, 50); // 50ms 정도만 잠깐
}, 800);

}

});

});



// 스크롤 시 header hide / show

window.addEventListener("scroll", () => {

// 메뉴 이동 중이면 scroll 로직 무시
if(isMenuScrolling) return;

let currentScroll = window.pageYOffset;



// 아래로 스크롤
if(currentScroll > lastScroll && currentScroll > scrollThreshold){

  header.classList.add("header-hide");
}

// 위로 스크롤
else if(currentScroll < lastScroll){

  header.classList.remove("header-hide");
}

lastScroll = currentScroll;

});


// 마우스 휠 이벤트 감지 (휠 위로 → 헤더 보임)
window.addEventListener("wheel", (e) => {
    // 메뉴 스크롤 중이면 무시
    if(isMenuScrolling) return;

    if(currentScroll == 0 && e.deltaY < 0){ 
        // deltaY < 0 : 휠 위로
        header.classList.remove("header-hide");
    }
});
