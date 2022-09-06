$(function(){

    $("#full_page").fullpage({
        licenseKey: "",
        autoScrolling:true,
        anchors:["fristPage"],
        anchors:["first"],
        'afterLoad': function (anchorLink, index) {
            if (index == 2){
                $("#header").removeClass("on");
                $("#full_page .second_page .copy .m").animate({width:"0px"},500);
                $("#full_page .second_page .copy .m_logo").show(1000);
            } else if (index == 3){
                $("#header").addClass("on");
            } else if(index == 6){

            }
        },

        'onLeave' : function (index, nextIndex, direction){
            if (index == 3 && direction == 'up'){
                $("#header").removeClass("on");
            } else if(index== 2 && direction == "down"){
                $("#header").addClass("on");
                $("#header").removeClass("white");
                $("#header").removeClass("gucci");
                $("#header li.white_logo").hide();
                $("#header li.gucci_color").hide();
                $("#header nav .gnb > li:first-child").show();
            } else if(index ==4 && direction =='up'){
                $("#header").removeClass("gucci");
                $("#header li:first-child").show();
                $("#header li.gucci_color").hide();
            }else if(index ==3 && direction =="down"){
                $("#header").addClass("gucci");
                $("#header .gnb > li:first-child").hide();
                $("#header .gnb > li.gucci_color").show();
            }else if(index ==5 && direction =="down"){
                $("#header").removeClass("gucci");
                $("#header").addClass("white");
                $("#header li.gucci_color").hide();
                $("#header li.white_logo").show();
            }else if(index == 6 && direction =="up"){
                $("#header").removeClass("white");
                $("#header").addClass("gucci");
                $("#header li.gucci_color").show();
                $("#header li.white_logo").hide();
            }
        }
    });
    $(".move_first a").on("click",function(){
        $("#header").removeClass("on");
    });
    //해상도가 충분하지 않을때 모달창
    $(window).on("resize",function(){
        let windowWidth = $(window).width();
        $(".window span").text(windowWidth);
        if(windowWidth>= 1745){
            $(".window").css("display","none");
        } else{$(".window").css("display","block")};
    })
});

//  로고 움직임
let docStyle = document.documentElement.style;

document.addEventListener('mousemove', function(e) {
  docStyle.setProperty('--mouse-x', e.clientX);
  docStyle.setProperty('--mouse-y', e.clientY);
});