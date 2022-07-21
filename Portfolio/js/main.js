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
            } else if(index ==4 && direction =='up'){
                $("#header").removeClass("gucci");
                $("#header li:first-child").show();
                $("#header li.gucci_color").hide();
            }else if(index ==3 && direction =="down"){
                $("#header li.gucci_color").show();
                $("#header li:first-child").hide();
            }
        }
    });
});