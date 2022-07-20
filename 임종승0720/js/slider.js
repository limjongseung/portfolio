
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
    dotsClass: $(".slider_dots"),
    // dotsClass: "slider_dots"      //*dots 버튼의 클래스
    // asNavFor: '.slider-nav',

});

$(".play").on("click",function(){
    $(".slider").slick("slickPlay");
});

$(".stop").on("click",function(){
    $(".slider").slick("slickPause");
});

$(".slide_btn").on("click",function(){
    $(this).toggleClass("stop");
    if ($(this).hasClass("stop")){
        $('.slider').slick('slickPause');
    } else {
        $('.slider').slick('slickPlay');
    }


});

