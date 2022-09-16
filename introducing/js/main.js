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
     nw[i].className = 'letter in';
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

 //slick-slider 구동
 $(".work_slide").slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows : true,
    draggable : true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });













 