//스크롤 이벤트
$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    $(".scroll_box").text(scrollTop);
    $("#main .con_4 .img_wrap1 .img_elipse img").css("transform","rotate("+ scrollTop/3 + "deg");
    $("#main .con_band .img_wrap img").css("transform","translateX(" + -scrollTop/1.5 + "px");
    if( scrollTop>=800 ) {
        $("#main .con_2 .img_wrap").addClass("on");
        $("#main .con_2  .text_wrap .text_wrap_1").addClass("on");
    } else if (scrollTop >=900){
        $("main")
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



















