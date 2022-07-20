
$(".slider").slick({
    infinite:true,
    autoplay:true,
    pauseOnHover:true,
    autoplaySpeed:3000,
    speed: 1000,
    slidesToShow:1,              
    slidesToScroll:1,         
    fade:true,
    prevArrow : $(".slider_prev"),
    nextArrow: $(".slider_next"),
    asNavFor: ".slider_nav"
});

$('.slider_nav').slick({
    vertical:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider',
    arrows:false
    // dots: true,
    // centerMode: true,
    // focusOnSelect: true
  });


// 재생 정지 버튼 컨트롤
$(".play").on("click",function(){
    $(".slider").slick("slickPlay");
});

$(".stop").on("click",function(){
    $(".slider").slick("slickPause");
});

$(".slide_btn").on("click",function(){
    $(this).toggleClass("stop");
    if($(this).hasClass("stop")){
        $(".slider").slick("slickPause");
    }else{
        $(".slider").slick("slickPlay");
    }
});



