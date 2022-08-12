
$(function(){

    if ($("#header").hasClass("main_header")){
        $("#header").on({
            mouseenter: function () {
                $("h1 img").attr("src", "img/selex_black.png");
            },
            mouseleave: function () {
                $("h1 img").attr("src", "img/selex_white.png");
            }
        });
    };

    // mega menu 구동
    $(".mega_gnb ul>li:nth-child(2)").mouseenter(function(){
        $(".mega_menu main .img_box img").removeClass("on");
        $(".mega_menu main .img_box img:nth-of-type(1)").addClass("on");
        $(".mega_menu .mega_sub").removeClass("on");
    });
    $(".mega_gnb ul>li:nth-child(3)").mouseenter(function(){
        $(".mega_menu main .img_box img").removeClass("on");
        $(".mega_menu main .img_box img:nth-of-type(2)").addClass("on");
        $(".mega_menu .mega_sub").addClass("on");
    });
    $(".mega_gnb ul>li:nth-child(4)").mouseenter(function(){
        $(".mega_menu main .img_box img").removeClass("on");
        $(".mega_menu main .img_box img:nth-of-type(3)").addClass("on");
        $(".mega_menu .mega_sub").removeClass("on");

    });
    $(".mega_gnb ul>li:nth-child(5)").mouseenter(function(){
        $(".mega_menu main .img_box img").removeClass("on");
        $(".mega_menu main .img_box img:nth-of-type(4)").addClass("on");
        $(".mega_menu .mega_sub").removeClass("on");
    });


    $("#header .header_wrap .hamburger").click(function(){
        $("#header .header_wrap .hamburger>span").toggleClass("on");
        $(".mega_menu").toggleClass("active");
    });
    $(document).on("scroll", function(){
        let scrollTop = $(document).scrollTop();
        $(".scroll_box").text(scrollTop);
        if ( scrollTop >500) {
            $("#sub_1 .content_1 .content_wrap .text_wrap").css("animation","disappear 1s ease-out forwards");
            // $("#sub_1 .content_2 .content_wrap").addClass("on");
        } else if( scrollTop <600){
            $("#sub_1 .content_1 .content_wrap .text_wrap").css("animation","appear 1s ease-out forwards");
        } 
    });
    // ^ Brand page 스크롤 이벤트
    $(document).on("scroll", function(){
        let scrollTop_1 = $(document).scrollTop();
        if ( scrollTop_1 > 200 && scrollTop_1 < 500) {
          $("#sub_1 .content_2 .content_wrap .img_wrap img").css("animation","appear_left 1s ease-out forwards");
          $("#sub_1 .content_2 .content_wrap .text_wrap").css("animation","appear_right 1s ease-out forwards");
        } else if (scrollTop_1 >500 && scrollTop_1<900){
            $("#sub_1 .content_3 .content_wrap .text_wrap").css("animation","appear_left 1s ease-out forwards");
            $("#sub_1 .content_3 .content_wrap .img_wrap img").css("animation","appear_right 1s ease-out forwards");
        } else if (scrollTop_1 > 900){
            $("#sub_1 .content_4 .content_wrap .img_wrap img").css("animation","appear_left 1s ease-out forwards");
            $("#sub_1 .content_4 .content_wrap .text_wrap").css("animation","appear_right 1s ease-out forwards");
        }
    });
    // ^ winwin page 스크롤 이벤트
    $(document).on("scroll", function(){
        let scrollTop_2 = $(document).scrollTop();
        if(scrollTop_2 >100 && scrollTop_2 <200){
            $("#sub_2 .sub_title").css("animation","opacity 1s ease-out forwards");
        } else if(scrollTop_2 >300 && scrollTop_2 <400){
            $("#sub_2 .con_2 .con_wrap .img_wrap").css("animation","appear_left 1s ease-out forwards");
            $("#sub_2 .con_2 .con_wrap .text_wrap").css("animation","appear_right 1s ease-out forwards");
        } else if(scrollTop_2 >700 && scrollTop_2 <800){
            $("#sub_2 .con_3 .con_wrap .img_wrap").css("animation","appear_left 1s ease-out forwards");
            $("#sub_2 .con_3 .con_wrap .text_wrap").css("animation","appear_right 1s ease-out forwards");
        } else if(scrollTop_2 >1200 && scrollTop_2 <1300){
            $("#sub_2 .con_4 .con_wrap .img_wrap").css("animation","appear_left 1s ease-out forwards");
            $("#sub_2 .con_4 .con_wrap .text_wrap").css("animation","appear_right 1s ease-out forwards");
        }else if(scrollTop_2 >1700 && scrollTop_2 <1800){
            $("#sub_2 .con_5 .con_wrap .img_wrap").css("animation","appear_left 1s ease-out forwards");
            $("#sub_2 .con_5 .con_wrap .text_wrap").css("animation","appear_right 1s ease-out forwards");
        }
    });
        // ^ fitness스크롤 이벤트
        $(document).on("scroll", function(){
            let scrollTop_4 = $(document).scrollTop();
            if(scrollTop_4 >100 && scrollTop_4 < 200){
                $("#sub_4 .sub_title").css("animation","opacity 1s ease-out forwards");
            }else if(scrollTop_4 >200 && scrollTop_4 <300){
                $("#sub_4 .con_2 .con_wrap .img_wrap").css("animation","appear_left 1s ease-out forwards");
                $("#sub_4 .con_2 .con_wrap .text_wrap").css("animation","appear_right 1s ease-out forwards");
            } else if(scrollTop_4 >800 && scrollTop_4 <900){
                $("#sub_4 .con_3 .con_wrap .img_wrap").css("animation","appear_right 1s ease-out forwards");
                $("#sub_4 .con_3 .con_wrap .text_wrap").css("animation","appear_left 1s ease-out forwards");
            } else if(scrollTop_4 >1300 && scrollTop_4 <1400){
                $("#sub_4 .con_4 .con_wrap .img_wrap").css("animation","appear_left 1s ease-out forwards");
                $("#sub_4 .con_4 .con_wrap .text_wrap").css("animation","appear_right 1s ease-out forwards");
            }
        });
        // sustainability 스크롤 이벤트
        


});

let verticalBar = document.getElementById("vertical_underline");
let verticalMenus = document.querySelectorAll(".mega_menu .mega_gnb ul>li a");
function verticalIndicator(e) {
    verticalBar.style.left = e.offsetLeft  + "px";
    verticalBar.style.width = e.offsetWidth + "px";
    verticalBar.style.top = e.offsetTop + e.offsetHeight + "px";
  }
  
  verticalMenus.forEach((menu) =>
    menu.addEventListener("mouseover", (e) => verticalIndicator(e.currentTarget))
  );

  
  let verticalBar1 = document.getElementById("vertical_underline_1");
let verticalMenus1 = document.querySelectorAll(".mega_menu .mega_sub ul>li a");
function verticalIndicator1(e) {
    verticalBar1.style.left = e.offsetLeft  + "px";
    verticalBar1.style.width = e.offsetWidth + "px";
    verticalBar1.style.top = e.offsetTop + e.offsetHeight + "px";
  }
  
  verticalMenus1.forEach((menu1) =>
    menu1.addEventListener("mouseover", (e) => verticalIndicator1(e.currentTarget))
  );






