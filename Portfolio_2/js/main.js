$(function(){

    $("#full_page").fullpage({
        licenseKey: "",
        autoScrolling:true,
        anchors:["fristPage"],
        anchors:["first"],

        'afterLoad': function (anchorLink, index) {
            if (index == 2){
                $("#header").removeClass("on");
                $("#full_page .second_page .copy .m").animate({width:"0px"},500)
                $("#full_page .second_page .copy .m_logo").show(1000)
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
                $("#header .gnb > li:first-child").show();
                $("#header .gnb > li.gucci_color").hide();
            }else if(index ==3 && direction =="down"){
                $("#header .gnb > li.gucci_color").show();
                $("#header .gnb > li:first-child").hide();
            }
        }
    });
});

//js 로고 움직이는 효과
var docStyle = document.documentElement.style;

// setting CSS variables inside this JS where they 
// can be declaratively used inside the CSS file.
document.addEventListener('mousemove', function(e) {
  docStyle.setProperty('--mouse-x', e.clientX);
  docStyle.setProperty('--mouse-y', e.clientY);
});