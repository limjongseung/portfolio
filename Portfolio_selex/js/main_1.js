
$(function(){
    $(".mega_gnb ul>li:nth-child(2)").on({
        mouseenter : function(){
            $("main .img_box img").attr("src","img/cow.png")
        }
    });
    $(".mega_gnb ul>li:nth-child(3)").on({
        mouseenter : function(){
            $("main .img_box img").attr("src","img/friendship.png")
        }
    });
    $(".mega_gnb ul>li:nth-child(4)").on({
        mouseenter : function(){
            $("main .img_box img").attr("src","img/selex_product.png")
        }
    });
    $(".mega_gnb ul>li:nth-child(5)").on({
        mouseenter : function(){
            $("main .img_box img").attr("src","img/wheat.png")
        }
    });
 
    $("#header .header_wrap .hamburger").click(function(){
        $("#header .header_wrap .hamburger>span").toggleClass("on");
        $(".mega_menu").toggleClass("active");
        
    });
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
