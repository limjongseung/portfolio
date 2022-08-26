$(document).on("scroll",function(){
    let scrollTop = $(document).scrollTop();
    $(".scroll_box").text(scrollTop);
});