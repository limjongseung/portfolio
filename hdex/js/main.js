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




$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    $(".scroll_box").text(scrollTop);

    $("#main .con_4 .img_wrap1 .img_elipse img").css("transform","rotate("+ scrollTop/4 + "deg");


    if( scrollTop>=833 ) {
        $("#main .con_2 .img_wrap").addClass("on");
    }





});





















