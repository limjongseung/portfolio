$(function(){

    $("#full_page").fullpage({
        licenseKey: "",
        autoScrolling:true,
        // scrollHorizontally:true
        'afterLoad': function (anchorLink, index) {
            if (index == 2){
                $("#header").removeClass("on");
            } else if (index == 3){
                $("#header").addClass("on");
            }
        },

        'onLeave' : function (index, nextIndex, direction){
            if (index == 3 && direction == 'up'){
                $("#header").removeClass("on");
            }
            // else if (index == 3 && direction == 'down'){
            //     alert ('3번에서 2번으로')
            // }
        }
    });



    // $(".sub").hide();

    // $(".gnb>li").on("mouseover",function(){
    //     $(this).find(".sub").slideDown(500);
    // });

    // $(".gnb>li").on("mouseleave",function(){
    //     $(this).find(".sub").slideUp(500);
    // });

});