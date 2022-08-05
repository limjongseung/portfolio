let verticalBar = document.getElementById("vertical-underline");
let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

function verticalIndicator(e) {
  verticalBar.style.left = e.offsetLeft + "px";
  verticalBar.style.width = e.offsetWidth + "px";
  verticalBar.style.top = e.offsetTop + e.offsetHeight + "px";
}

verticalMenus.forEach((menu) =>
  menu.addEventListener("mouseover", (e) => verticalIndicator(e.currentTarget))
);