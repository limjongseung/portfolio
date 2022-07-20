$(function(){

    $("#full_page").fullpage({
        licenseKey: "",
        autoScrolling:true,
        'afterLoad': function (anchorLink, index) {
            if (index == 2){
                $("#header").removeClass("on");
            } else if (index == 3){
                $("#header").addClass("on");
                $("#header").removeClass("gucci");
            } else if(index == 4){
                $("#header").addClass("gucci");
            }
        },

        'onLeave' : function (index, nextIndex, direction){
            if (index == 3 && direction == 'up'){
                $("#header").removeClass("on");
            } 
        }
    });
});