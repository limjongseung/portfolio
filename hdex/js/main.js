//스크롤 이벤트
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    $(".scroll_box").text(scrollTop);
    $("#main .con_4 .img_wrap1 .img_elipse img").css("transform","rotate("+ scrollTop/3 + "deg");
    $("#main .con_band .img_wrap img").css("transform","translateX(" + -scrollTop/1.5 + "px");
    if( scrollTop>=800) {
        $("#main .con_2 .img_wrap").addClass("on");
        $("#main .con_2  .text_wrap .text_wrap_1 .text_e").addClass("on");
    }
});

$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 850){
            $("#main .con_2  .text_wrap .text_wrap_2").addClass("on")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 1400){
            $("#main .con_3  .img_wrap>p:first-child").addClass("on")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 1430){
            $("#main .con_3  .img_wrap .img_text").addClass("on")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 1550){
            $("#main .con_3 .text_wrap .text_wrap_main").addClass("on")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 1580){
            $("#main .con_3 .text_wrap .text_wrap_link").addClass("on")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 2100){
            $("#main .con_4 .img_wrap2 p").addClass("on")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 2400){
            $("#main .con_4 .img_wrap1 .img_wrap_scroll p").addClass("on")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 2500){
            $("#main .con_4 .img_wrap1 .img_text").addClass("on")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 4000){
            $("#main .con_5 .img_wrap .logo_wrap").addClass("on")
            $("#main .con_5 .img_wrap>p").addClass("on")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 4600){
            $("#main .con_5 .text_wrap .text_scroll").addClass("on")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 5200){
            $("#main .con_6 .img_wrap1>p").addClass("on")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 5300){
            $("#main .con_6 .img_wrap1 .img_text .text_scroll").addClass("on")
    }
});
// 이미지가 아닌 텍스트를 가로로 나오게 했을시  글자가 타이핑하듯 나오는 현상 해결

$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 5600){
            $("#main .con_6 .img_wrap2>p").addClass("on")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 6600){
            $("#main .con_7 .img_wrap>p").addClass("on")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 6700){
            $("#main .con_7 .text_wrap .text_scroll").addClass("on")
    }
});
























// 상품색상 육각형 호버 효과
$(function(){
    $("#main .con_10 .con_list>li .color_box>li").mouseenter(function(){
        $("#main .con_10 .con_list>li .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_10 .con_list>li .color_box>li").mouseleave(function(){
        $("#main .con_10 .con_list>li .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});



















