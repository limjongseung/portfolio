//스크롤 이벤트
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    $(".scroll_box").text(scrollTop);
    //원형 로고 이미지 구동 
    $("#main .con_4 .img_wrap1 .img_elipse img").css("transform","rotate("+ scrollTop/3 + "deg");
    //밴드 이미지 구동
    $("#main .con_band .img_wrap img").css("transform","translateX(" + -scrollTop/1.5 + "px");
    if( scrollTop>=788) {
        $("#main .con_2 .img_wrap").addClass("on");
        $("#main .con_2  .text_wrap .text_wrap_1 .text_e").addClass("on");
    }
});
//헤더 색상 변경
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 720){
        $("h1 img").attr("src","img/hdex_black.png");
        $("#header").css("color","black");
        $("#header nav .gnb>li:nth-child(2) img, #header nav .gnb>li:nth-child(3) img").attr("src","img/black_x.png");
        $("#header .mega_menu .mega_gnb ul>li:nth-child(1) img, #header .mega_menu .mega_gnb ul>li:nth-child(2) img").attr("src","img/black_x.png");
        $("#header nav .gnb>li").addClass("on");
        $("#header nav .gnb>li .hamburger span").css("background","black");
        $("#header").css("background","rgba(255, 255, 255, 0.5)")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    if(scrollTop <= 720){
        $("h1 img").attr("src","img/hdex_main.png");
        $("#header").css("color","white");
        $("#header nav .gnb>li:nth-child(2) img, #header nav .gnb>li:nth-child(3) img").attr("src","img/white_x.png");
        $("#header nav .gnb>li").removeClass("on");
        $("#header nav .gnb>li .hamburger span").css("background","white");
        $("#header nav .gnb>li:nth-child(2) img, #header nav .gnb>li:nth-child(3) img").attr("src","img/white_x.png");
        $("#header .mega_menu .mega_gnb ul>li:nth-child(1) img, #header .mega_menu .mega_gnb ul>li:nth-child(2) img").attr("src","img/white_x.png");
        $("#header").css("background","transparent")
    }
});
//햄버거 메뉴 구동
$("#header nav .gnb>li .hamburger").on("click",function(){
    $("#header nav .gnb>li .hamburger").toggleClass("on");
    $(".mega_menu").toggleClass("on");
});
$(window).resize(function(){
    if(window.innerWidth >920){
        $("#header nav .gnb>li .hamburger").removeClass("on");
        $(".mega_menu").removeClass("on");
    }
})
//헤더 클릭시 해당영역으로 이동
$("#header nav gnb>li a").click(function(){
    x= $(this).attr("href");
    $("html, body").stop().animate({scrollTop : $(x).offset().top },1000);
})
$("#main .con_3 .text_wrap .text_wrap_link a, #main .con_7  .text_wrap .text_link a").click(function(){
    x= $(this).attr("href");
    $("html, body").stop().animate({scrollTop : $(x).offset().top },100);
})


//스크롤 이벤트
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
    let windowWidth = $(window).width();
    let scrollTop = $(document).scrollTop();
    if(scrollTop >= 2400 && windowWidth >720){
            $("#main .con_4 .img_wrap1 .img_wrap_scroll p").addClass("on")
    } else if(scrollTop >= 2200 && windowWidth <=720){
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
    let windowWidth = $(window).width();
    if(scrollTop >= 4000 && windowWidth>820){
            $("#main .con_5 .img_wrap .logo_wrap").addClass("on")
            $("#main .con_5 .img_wrap>p").addClass("on")
    } else if(scrollTop >= 3700 &&  windowWidth >720 && windowWidth<=820){
        $("#main .con_5 .img_wrap .logo_wrap").addClass("on")
        $("#main .con_5 .img_wrap>p").addClass("on")
    }else if(scrollTop >= 3300 && windowWidth<=720){
        $("#main .con_5 .img_wrap .logo_wrap").addClass("on")
        $("#main .con_5 .img_wrap>p").addClass("on")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    let windowWidth = $(window).width();
    if( scrollTop >= 4600 && windowWidth>820){
        $("#main .con_5 .text_wrap .text_scroll").addClass("on")
    } else if(scrollTop >= 3800 && windowWidth <= 820){
        $("#main .con_5 .text_wrap .text_scroll").addClass("on")
   }
   });
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    let windowWidth = $(window).width();
    if(scrollTop >= 5200 && windowWidth > 1420){
            $("#main .con_6 .img_wrap1>p").addClass("on")
    } else if (scrollTop >= 5300 && windowWidth > 920 && windowWidth <= 1420){
            $("#main .con_6 .img_wrap1>p").addClass("on")
    } else if (scrollTop >= 5100 &&  windowWidth>820 && windowWidth <= 920){
            $("#main .con_6 .img_wrap1>p").addClass("on")
    }else if (scrollTop >= 4500 && windowWidth >720 && windowWidth <= 820){
            $("#main .con_6 .img_wrap1>p").addClass("on")
    }else if (scrollTop >= 4300 && windowWidth <= 720){
            $("#main .con_6 .img_wrap1>p").addClass("on")
   }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    let windowWidth = $(window).width();
    if(scrollTop >= 5300 &&  windowWidth>820){
            $("#main .con_6 .img_wrap1 .img_text .text_scroll").addClass("on")
    }else if (scrollTop >= 4700 && windowWidth >720 && windowWidth <= 820){
        $("#main .con_6 .img_wrap1 .img_text .text_scroll").addClass("on")
    }else if (scrollTop >= 4400 && windowWidth <= 720){
        $("#main .con_6 .img_wrap1 .img_text .text_scroll").addClass("on")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    let windowWidth = $(window).width();
    if(scrollTop >= 5600 && windowWidth>1420){
            $("#main .con_6 .img_wrap2>p").addClass("on")
    } else if(scrollTop >= 5300 && 1310<windowWidth && windowWidth<=1420){
        $("#main .con_6 .img_wrap2>p").addClass("on")
    } else if(scrollTop >= 6400 && 1220<windowWidth && windowWidth<=1310){
        $("#main .con_6 .img_wrap2>p").addClass("on")
    } else if(scrollTop >=6100 && windowWidth >920 && windowWidth < 1220){
        $("#main .con_6 .img_wrap2>p").addClass("on")
    } else if(scrollTop >=6000 && windowWidth>820 && windowWidth <=920){
        $("#main .con_6 .img_wrap2>p").addClass("on")
    }else if(scrollTop >=5400 && windowWidth >720 && windowWidth <= 820){
        $("#main .con_6 .img_wrap2>p").addClass("on")
    }else if(scrollTop >=5200 && windowWidth <= 720){
        $("#main .con_6 .img_wrap2>p").addClass("on")
    }
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    let windowWidth = $(window).width();
    if(scrollTop >= 6600 && windowWidth>1420){
            $("#main .con_7 .img_wrap>p").addClass("on")
    } else if(scrollTop >= 6300 && 1310<windowWidth && windowWidth<=1420){
        $("#main .con_7 .img_wrap>p").addClass("on")
    } else if(scrollTop >= 7300 && windowWidth> 1220 && windowWidth<=1310){
        $("#main .con_7 .img_wrap>p").addClass("on")
    } else if(scrollTop >= 7000 &&  windowWidth>820 && windowWidth<= 1220 ){
        $("#main .con_7 .img_wrap>p").addClass("on")
    }  else if(scrollTop >= 6100  && windowWidth >720 && windowWidth <= 820){
        $("#main .con_7 .img_wrap>p").addClass("on")
    } else if(scrollTop >= 5600  && windowWidth <= 720){
        $("#main .con_7 .img_wrap>p").addClass("on")
    } 
});
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    let windowWidth = $(window).width();
    if(scrollTop >= 6700 && windowWidth >1420){
            $("#main .con_7 .text_wrap").addClass("on")
    } else if (scrollTop >= 6300 && windowWidth>1220 && windowWidth <=1420){
        $("#main .con_7 .text_wrap").addClass("on")
    } else if(scrollTop >= 7100 &&  windowWidth>820 && windowWidth<= 1220){
        $("#main .con_7 .text_wrap").addClass("on")
    } else if(scrollTop >= 5900 && windowWidth >720 && windowWidth <= 820 ){
        $("#main .con_7 .text_wrap").addClass("on")
    }else if(scrollTop >= 6100 &&   windowWidth <= 720 ){
        $("#main .con_7 .text_wrap").addClass("on")
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
        $("#main .con_12 .con_list>li:nth-child(8) .img_wrap img").attr("src", "img/heo_trackshort_black.png");
    });
    $("#main .con_12 .con_list>li:nth-child(8) .color_box>li:nth-child(2)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(8) .img_wrap img").attr("src", "img/heo_trackshort_gray.png");
    });
    $("#main .con_12 .con_list>li:nth-child(8) .color_box>li:nth-child(3)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(8) .img_wrap img").attr("src", "img/heo_trackshort_blackgray.png");
    });
    $("#main .con_12 .con_list>li:nth-child(8) .color_box>li:nth-child(4)").mouseenter(function(){
        $("#main .con_12 .con_list>li:nth-child(8) .img_wrap img").attr("src", "img/heo_trackshort_mustard.png");
    });
    $("#main .con_12 .con_list>li:nth-child(8) .color_box").mouseleave(function(){
        $("#main .con_12 .con_list>li:nth-child(8) .img_wrap img").attr("src", "img/heo_con8.png");
    });
});

//반응형 이미지 바꾸기
$(document).on("scroll",function(){
    let windowWidth = $(window).width();
    if(windowWidth <=1050){
        $("#main .con_11 img").attr("src","img/hdex_heoung_small.png");
        $("#main .con_9 img").attr("src","img/hdex_kim_small.png");
        $("#main .con_4 .img_wrap1 .img_elipse img").attr("src","img/hdex_elipse_small.png");
    }else if (windowWidth >1050){
        $("#main .con_11 img").attr("src","img/heo_hdex.png");
        $("#main .con_9 img").attr("src","img/hdex_kim.png");
        $("#main .con_4 .img_wrap1 .img_elipse img").attr("src","img/hdex_elipse.png");
    }
});


















