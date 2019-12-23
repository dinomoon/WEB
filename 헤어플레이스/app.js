var slideContainer = document.querySelector(".slide-container"),
    slides = document.getElementsByClassName("slide"),
    controlBars = document.getElementsByClassName("control-bar"),
    slideCount = slides.length,
    currentIndex = 0,
    navPrev = document.querySelector(".prev"),
    navNext = document.querySelector(".next"),
    playBtn = document.querySelector(".play"),
    stopBtn = document.querySelector(".stop");

// 슬라이드가 있으면 가로로 배열하기
for(var i=0; i<slideCount; i++){
    slides[i].style.left = i*100 + '%';
}

// 슬라이드 이동 함수
function goToSlide(idx){
    slideContainer.style.left = idx * -100 + '%';
    slideContainer.classList.add('animated');
    
    currentIndex = idx;
    //updateNav();
}

// function updateNav(){
//     if(currentIndex == 0){
//         navPrev.classList.add('disabled');
//     } else {
//         navPrev.classList.remove('disabled');
//     }

//     if(currentIndex == slideCount - 1){
//         navNext.classList.add('disabled');
//     } else {
//         navNext.classList.remove('disabled');
//     }
// }

navPrev.addEventListener("click", function(event){
    event.preventDefault();
    
    if(currentIndex > 0) {
        controlBars[currentIndex].classList.remove('on');
        controlBars[currentIndex-1].classList.add('on');
        goToSlide(currentIndex-1);
    } else {
        controlBars[currentIndex].classList.remove('on');
        controlBars[slideCount-1].classList.add('on');
        goToSlide(slideCount - 1);
    }
});
navNext.addEventListener("click", function(event){
    event.preventDefault();
    if(currentIndex < slideCount - 1) {
        controlBars[currentIndex].classList.remove('on');
        controlBars[currentIndex+1].classList.add('on');
        goToSlide(currentIndex+1);
    } else {
        controlBars[currentIndex].classList.remove('on');
        controlBars[0].classList.add('on');
        goToSlide(0);
    }
});

goToSlide(0);

setInterval(function(){
    if(currentIndex < slideCount - 1) {
        controlBars[currentIndex].classList.remove('on');
        controlBars[currentIndex+1].classList.add('on');
        goToSlide(currentIndex+1);
    } else {
        controlBars[currentIndex].classList.remove('on');
        controlBars[0].classList.add('on');
        goToSlide(0);
    }
}, 3000);

// var myTimer = playBtn.addEventListener("click", setInterval(function(){
//     if(currentIndex < slideCount - 1) {
//         controlBars[currentIndex].classList.remove('on');
//         controlBars[currentIndex+1].classList.add('on');
//         goToSlide(currentIndex+1);
//     } else {
//         controlBars[currentIndex].classList.remove('on');
//         controlBars[0].classList.add('on');
//         goToSlide(0);
//     }
// }, 3000));

// myTimer();

// stopBtn.addEventListener("click", function(){
//     clearInterval(myTimer);
// });