//full ppage js
    $("#full_page").fullpage({
        licenseKey: "",
        autoScrolling:true,
        navigation:true,
        
});

// gnb 밑줄표시 구동 js
let verticalBar = document.getElementById("vertical_underline");
let verticalMenus = document.querySelectorAll("header .gnb>li a");

function verticalIndicator(e) {
    verticalBar.style.left = e.offsetLeft + "px";
    verticalBar.style.width = e.offsetWidth + "px";
    verticalBar.style.top = e.offsetTop + e.offsetHeight + "px";
}

verticalMenus.forEach((menu) =>
    menu.addEventListener("mouseover", (e) => verticalIndicator(e.currentTarget))
);
 //#second text 구동
 var words = document.getElementsByClassName('word');
 var wordArray = [];
 var currentWord = 0;

 words[currentWord].style.opacity = 1;
 for (var i = 0; i < words.length; i++) {
 splitLetters(words[i]);
 }

 function changeWord() {
 var cw = wordArray[currentWord];
 var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
 for (var i = 0; i < cw.length; i++) {
     animateLetterOut(cw, i);
 }

 for (var i = 0; i < nw.length; i++) {
     nw[i].className = 'letter behind';
     nw[0].parentElement.style.opacity = 1;
     animateLetterIn(nw, i);
 }

 currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
 }

 function animateLetterOut(cw, i) {
 setTimeout(function() {
     cw[i].className = 'letter out';
 }, i * 80);
 }

 function animateLetterIn(nw, i) {
 setTimeout(function() {
     nw[i].className = 'letter in background_e';
 }, 340 + (i * 80));
 }

 function splitLetters(word) {
 var content = word.innerHTML;
 word.innerHTML = '';
 var letters = [];
 for (var i = 0; i < content.length; i++) {
     var letter = document.createElement('span');
     letter.className = 'letter';
     letter.innerHTML = content.charAt(i);
     word.appendChild(letter);
     letters.push(letter);
 }

 wordArray.push(letters);
 }
 changeWord();
 setInterval(changeWord, 3000);         

 //word에 호버하면 이벤트
 $(document).ready(function(){
    if($("#second .word.first span").hasClass("background_e")){
        $("#second").addClass("bg2");
        $("#seoncd").removeClass("bg2");
        $("#seoncd").removeClass("bg3");
    }
});
 $(document).ready(function(){
    if($("#second .word.second span").hasClass("background_e")){
        $("#second").addClass("bg2");
        $("#seoncd").removeClass("bg2");
        $("#seoncd").removeClass("bg3");
    }
});
 //slick-slider 구동
 $(".work_slide").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    centerMode:true,
    asNavFor: '.text_slide',
    // responsive: [
    //     {
    //       breakpoint: 1440,
    //       settings: {
    //         slidesToShow: 1,
    //         centerMode:false,
    //         slidesToScroll:1
    //       }
    //     }
    // ]
});
 $(".text_slide").slick({
    slide: 'div',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: '.work_slide',
    arrows:false,
    fade:true
});

//1. 슬라이드 화살표
//2. 슬라이드 구동
//3. 배경화면 구동














 