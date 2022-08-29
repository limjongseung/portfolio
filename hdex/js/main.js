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
    $("#main .con_10 .con_list>li:nth-child(1) .color_box>li").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(1) .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_10 .con_list>li:nth-child(1) .color_box>li").mouseleave(function(){
        $("#main .con_10 .con_list>li:nth-child(1) .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});
$(function(){
    $("#main .con_10 .con_list>li:nth-child(2) .color_box>li").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(2) .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_10 .con_list>li:nth-child(2) .color_box>li").mouseleave(function(){
        $("#main .con_10 .con_list>li:nth-child(2) .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});
$(function(){
    $("#main .con_10 .con_list>li:nth-child(3) .color_box>li").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(3) .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_10 .con_list>li:nth-child(3) .color_box>li").mouseleave(function(){
        $("#main .con_10 .con_list>li:nth-child(3) .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});
$(function(){
    $("#main .con_10 .con_list>li:nth-child(4) .color_box>li").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(4) .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_10 .con_list>li:nth-child(4) .color_box>li").mouseleave(function(){
        $("#main .con_10 .con_list>li:nth-child(4) .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});
$(function(){
    $("#main .con_10 .con_list>li:nth-child(5) .color_box>li").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(5) .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_10 .con_list>li:nth-child(5) .color_box>li").mouseleave(function(){
        $("#main .con_10 .con_list>li:nth-child(5) .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});
$(function(){
    $("#main .con_10 .con_list>li:nth-child(6) .color_box>li").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(6) .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_10 .con_list>li:nth-child(6) .color_box>li").mouseleave(function(){
        $("#main .con_10 .con_list>li:nth-child(6) .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});
$(function(){
    $("#main .con_10 .con_list>li:nth-child(7) .color_box>li").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(7) .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_10 .con_list>li:nth-child(7) .color_box>li").mouseleave(function(){
        $("#main .con_10 .con_list>li:nth-child(7) .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});
$(function(){
    $("#main .con_10 .con_list>li:nth-child(8) .color_box>li").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(8) .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_10 .con_list>li:nth-child(8) .color_box>li").mouseleave(function(){
        $("#main .con_10 .con_list>li:nth-child(8) .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});
$(function(){
    $("#main .con_12 .con_list>li:nth-child(1) .color_box>li").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(1) .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_12 .con_list>li:nth-child(1) .color_box>li").mouseleave(function(){
        $("#main .con_12 .con_list>li:nth-child(1) .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});
$(function(){
    $("#main .con_12 .con_list>li:nth-child(2) .color_box>li").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(2) .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_12 .con_list>li:nth-child(2) .color_box>li").mouseleave(function(){
        $("#main .con_12 .con_list>li:nth-child(2) .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});
$(function(){
    $("#main .con_12 .con_list>li:nth-child(3) .color_box>li").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(3) .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_12 .con_list>li:nth-child(3) .color_box>li").mouseleave(function(){
        $("#main .con_12 .con_list>li:nth-child(3) .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});
$(function(){
    $("#main .con_12 .con_list>li:nth-child(4) .color_box>li").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(4) .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_12 .con_list>li:nth-child(4) .color_box>li").mouseleave(function(){
        $("#main .con_12 .con_list>li:nth-child(4) .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});
$(function(){
    $("#main .con_12 .con_list>li:nth-child(5) .color_box>li").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(5) .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_12 .con_list>li:nth-child(5) .color_box>li").mouseleave(function(){
        $("#main .con_12 .con_list>li:nth-child(5) .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});
$(function(){
    $("#main .con_12 .con_list>li:nth-child(6) .color_box>li").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(6) .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_12 .con_list>li:nth-child(6) .color_box>li").mouseleave(function(){
        $("#main .con_12 .con_list>li:nth-child(6) .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});
$(function(){
    $("#main .con_12 .con_list>li:nth-child(7) .color_box>li").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(7) .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_12 .con_list>li:nth-child(7) .color_box>li").mouseleave(function(){
        $("#main .con_12 .con_list>li:nth-child(7) .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});
$(function(){
    $("#main .con_12 .con_list>li:nth-child(8) .color_box>li").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(8) .color_box>li").not($(this)).addClass("low");
        $(this).addClass("up");
    });
    $("#main .con_12 .con_list>li:nth-child(8) .color_box>li").mouseleave(function(){
        $("#main .con_12 .con_list>li:nth-child(8) .color_box>li").removeClass("low");
        $(this).removeClass("up");
    });
});

// 육각형 호버시 상품이미지가 바뀌는 구동
$(function(){
    $("#main .con_10 .con_list>li:nth-child(1) .color_box>li:nth-child(1)").mouseenter(function(){
            $("#main .con_10 .con_list>li:nth-child(1) .img_wrap img").attr("src", "img/kim_con1.png");
    });
    $("#main .con_10 .con_list>li:nth-child(1) .color_box>li:nth-child(2)").mouseenter(function(){
            $("#main .con_10 .con_list>li:nth-child(1) .img_wrap img").attr("src", "img/compression_white.png");
    });
    $("#main .con_10 .con_list>li:nth-child(2) .color_box>li:nth-child(1)").mouseenter(function(){
            $("#main .con_10 .con_list>li:nth-child(2) .img_wrap img").attr("src", "img/arch_logo.png");
    });
    $("#main .con_10 .con_list>li:nth-child(2) .color_box>li:nth-child(2)").mouseenter(function(){
            $("#main .con_10 .con_list>li:nth-child(2) .img_wrap img").attr("src", "img/kim_con2.png");
    });
    $("#main .con_10 .con_list>li:nth-child(3) .color_box>li:nth-child(1)").mouseenter(function(){
            $("#main .con_10 .con_list>li:nth-child(3) .img_wrap img").attr("src", "img/compression_sleeveless_black.png");
    });
    $("#main .con_10 .con_list>li:nth-child(3) .color_box>li:nth-child(2)").mouseenter(function(){
            $("#main .con_10 .con_list>li:nth-child(3) .img_wrap img").attr("src", "img/compression_sleeveless_white.png");
    });
    $("#main .con_10 .con_list>li:nth-child(3) .color_box").mouseleave(function(){
            $("#main .con_10 .con_list>li:nth-child(3) .img_wrap img").attr("src", "img/kim_con3.png");
    });
    $("#main .con_10 .con_list>li:nth-child(4) .color_box>li:nth-child(1)").mouseenter(function(){
            $("#main .con_10 .con_list>li:nth-child(4) .img_wrap img").attr("src", "img/kim_con4.png");
    });
    $("#main .con_10 .con_list>li:nth-child(4) .color_box>li:nth-child(2)").mouseenter(function(){
            $("#main .con_10 .con_list>li:nth-child(4) .img_wrap img").attr("src", "img/sleeveless_black.png");
    });
    $("#main .con_10 .con_list>li:nth-child(4) .color_box>li:nth-child(3)").mouseenter(function(){
            $("#main .con_10 .con_list>li:nth-child(4) .img_wrap img").attr("src", "img/sleeveless_blue.png");
    });
    $("#main .con_10 .con_list>li:nth-child(5) .color_box>li:nth-child(1)").mouseenter(function(){
            $("#main .con_10 .con_list>li:nth-child(5) .img_wrap img").attr("src", "img/camo_muscle_black.png");
    });
    $("#main .con_10 .con_list>li:nth-child(5) .color_box>li:nth-child(2)").mouseenter(function(){
            $("#main .con_10 .con_list>li:nth-child(5) .img_wrap img").attr("src", "img/camo_muscle_white.png");
    });
    $("#main .con_10 .con_list>li:nth-child(5) .color_box").mouseleave(function(){
        $("#main .con_10 .con_list>li:nth-child(5) .img_wrap img").attr("src", "img/kim_con5.png");
    });
    $("#main .con_10 .con_list>li:nth-child(6) .color_box>li:nth-child(1)").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(6) .img_wrap img").attr("src", "img/main_logo_black.png");
   });
    $("#main .con_10 .con_list>li:nth-child(6) .color_box>li:nth-child(2)").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(6) .img_wrap img").attr("src", "img/main_logo_blue.png");
    });
    $("#main .con_10 .con_list>li:nth-child(6) .color_box>li:nth-child(3)").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(6) .img_wrap img").attr("src", "img/main_logo_gray.png");
    });
    $("#main .con_10 .con_list>li:nth-child(6) .color_box>li:nth-child(4)").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(6) .img_wrap img").attr("src", "img/main_logo_black_gray.png");
    });
    $("#main .con_10 .con_list>li:nth-child(6) .color_box>li:nth-child(5)").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(6) .img_wrap img").attr("src", "img/main_logo_white.png");
    });
    $("#main .con_10 .con_list>li:nth-child(6) .color_box").mouseleave(function(){
        $("#main .con_10 .con_list>li:nth-child(6) .img_wrap img").attr("src", "img/kim_con6.png");
    });
    $("#main .con_10 .con_list>li:nth-child(1) .color_box").mouseleave(function(){
        $("#main .con_10 .con_list>li:nth-child(1) .img_wrap img").attr("src", "img/kim_con1.png");
    });
    $("#main .con_10 .con_list>li:nth-child(2) .color_box").mouseleave(function(){
        $("#main .con_10 .con_list>li:nth-child(2) .img_wrap img").attr("src", "img/kim_con2.png");
    });
    $("#main .con_10 .con_list>li:nth-child(4) .color_box").mouseleave(function(){
        $("#main .con_10 .con_list>li:nth-child(4) .img_wrap img").attr("src", "img/kim_con4.png");
    });
    $("#main .con_10 .con_list>li:nth-child(7) .color_box>li:nth-child(1)").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(7) .img_wrap img").attr("src", "img/back_black.png");
    });
    $("#main .con_10 .con_list>li:nth-child(7) .color_box>li:nth-child(2)").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(7) .img_wrap img").attr("src", "img/back_white.png");
    });
    $("#main .con_10 .con_list>li:nth-child(7) .color_box>li:nth-child(3)").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(7) .img_wrap img").attr("src", "img/back_blue.png");
    });
    $("#main .con_10 .con_list>li:nth-child(7) .color_box>li:nth-child(4)").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(7) .img_wrap img").attr("src", "img/back_khaki.png");
    });
    $("#main .con_10 .con_list>li:nth-child(7) .color_box").mouseleave(function(){
        $("#main .con_10 .con_list>li:nth-child(7) .img_wrap img").attr("src", "img/kim_con7.png");
    });
    $("#main .con_10 .con_list>li:nth-child(8) .color_box>li:nth-child(1)").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(8) .img_wrap img").attr("src", "img/camo_black.png");
    });
    $("#main .con_10 .con_list>li:nth-child(8) .color_box>li:nth-child(2)").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(8) .img_wrap img").attr("src", "img/camo_white.png");
    });
    $("#main .con_10 .con_list>li:nth-child(8) .color_box>li:nth-child(3)").mouseenter(function(){
        $("#main .con_10 .con_list>li:nth-child(8) .img_wrap img").attr("src", "img/camo_khaki.png");
    });
    $("#main .con_10 .con_list>li:nth-child(8) .color_box").mouseleave(function(){
        $("#main .con_10 .con_list>li:nth-child(8) .img_wrap img").attr("src", "img/kim_con8.png");
    });
    $("#main .con_12 .con_list>li:nth-child(2) .color_box>li:nth-child(1)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(2) .img_wrap img").attr("src", "img/heo_arch_black.png");
    });
    $("#main .con_12 .con_list>li:nth-child(2) .color_box>li:nth-child(2)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(2) .img_wrap img").attr("src", "img/heo_arch_white.png");
    });
    $("#main .con_12 .con_list>li:nth-child(2) .color_box>li:nth-child(3)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(2) .img_wrap img").attr("src", "img/heo_arch_navy.png");
    });
    $("#main .con_12 .con_list>li:nth-child(2) .color_box>li:nth-child(4)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(2) .img_wrap img").attr("src", "img/heo_arch_blue.png");
    });
    $("#main .con_12 .con_list>li:nth-child(2) .color_box>li:nth-child(5)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(2) .img_wrap img").attr("src", "img/heo_arch_green.png");
    });
    $("#main .con_12 .con_list>li:nth-child(2) .color_box").mouseleave(function(){
        $("#main .con_12 .con_list>li:nth-child(2) .img_wrap img").attr("src", "img/heo_con2.png");
    });
    $("#main .con_12 .con_list>li:nth-child(3) .color_box>li:nth-child(1)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(3) .img_wrap img").attr("src", "img/heo_main_short_black.png");
    });
    $("#main .con_12 .con_list>li:nth-child(3) .color_box>li:nth-child(2)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(3) .img_wrap img").attr("src", "img/heo_main_short_navy.png");
    });
    $("#main .con_12 .con_list>li:nth-child(3) .color_box>li:nth-child(3)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(3) .img_wrap img").attr("src", "img/heo_main_short_tro.png");
    });
    $("#main .con_12 .con_list>li:nth-child(3) .color_box>li:nth-child(4)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(3) .img_wrap img").attr("src", "img/heo_main_short_blackgray.png");
    });
    $("#main .con_12 .con_list>li:nth-child(3) .color_box").mouseleave(function(){
        $("#main .con_12 .con_list>li:nth-child(3) .img_wrap img").attr("src", "img/heo_con3.png");
    });
    $("#main .con_12 .con_list>li:nth-child(4) .color_box>li:nth-child(1)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(4) .img_wrap img").attr("src", "img/slogan_shirt.png");
    });
    $("#main .con_12 .con_list>li:nth-child(4) .color_box>li:nth-child(2)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(4) .img_wrap img").attr("src", "img/heo_con4.png");
    });
    $("#main .con_12 .con_list>li:nth-child(4) .color_box").mouseleave(function(){
        $("#main .con_12 .con_list>li:nth-child(4) .img_wrap img").attr("src", "img/heo_con4.png");
    });
    $("#main .con_12 .con_list>li:nth-child(5) .color_box>li:nth-child(1)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(5) .img_wrap img").attr("src", "img/heo_back_black.png");
    });
    $("#main .con_12 .con_list>li:nth-child(5) .color_box>li:nth-child(2)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(5) .img_wrap img").attr("src", "img/heo_back_blackgray.png");
    });
    $("#main .con_12 .con_list>li:nth-child(5) .color_box>li:nth-child(3)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(5) .img_wrap img").attr("src", "img/heo_back_navy.png");
    });
    $("#main .con_12 .con_list>li:nth-child(5) .color_box>li:nth-child(4)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(5) .img_wrap img").attr("src", "img/heo_back_white.png");
    });
    $("#main .con_12 .con_list>li:nth-child(5) .color_box").mouseleave(function(){
        $("#main .con_12 .con_list>li:nth-child(5) .img_wrap img").attr("src", "img/heo_con5.png");
    });
    $("#main .con_12 .con_list>li:nth-child(6) .color_box>li:nth-child(1)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(6) .img_wrap img").attr("src", "img/main_logo_black.png");
    });
    $("#main .con_12 .con_list>li:nth-child(6) .color_box>li:nth-child(2)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(6) .img_wrap img").attr("src", "img/main_logo_blue.png");
    });
    $("#main .con_12 .con_list>li:nth-child(6) .color_box>li:nth-child(3)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(6) .img_wrap img").attr("src", "img/main_logo_gray.png");
    });
    $("#main .con_12 .con_list>li:nth-child(6) .color_box>li:nth-child(4)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(6) .img_wrap img").attr("src", "img/main_logo_black_gray.png");
    });
    $("#main .con_12 .con_list>li:nth-child(6) .color_box>li:nth-child(5)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(6) .img_wrap img").attr("src", "img/main_logo_white.png");
    });
    $("#main .con_12 .con_list>li:nth-child(6) .color_box").mouseleave(function(){
        $("#main .con_12 .con_list>li:nth-child(6) .img_wrap img").attr("src", "img/heo_con6.png");
    });
    $("#main .con_12 .con_list>li:nth-child(8) .color_box>li:nth-child(1)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(8) .img_wrap img").attr("src", "img/main_logo_white.png");
    });
});



















