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
                $("#header").addClass("gucci");
                $("#header .gnb > li:first-child").hide();
                $("#header .gnb > li.gucci_color").show();
            }
        }
    });
});