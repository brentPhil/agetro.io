const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
navItems.forEach((item) => item.addEventListener("click", toggleMenu));
function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        navItems.forEach((item) =>
        item.classList.add("show"));
        navItems.forEach((item) =>
        item.classList.remove("close"));
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        navItems.forEach((item) =>
        item.classList.add("close"));
        showMenu = false;
    }
};
        
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

  btn.addEventListener("click",()=>{
    btn.classList.add("test")
  })
  
  
  //umriss.addEventListener("webkitAnimationEnd",..... );
  path.addEventListener("animationend",()=>{
    console.log("end")
    btn.classList.remove("test");
  } );

  
// var tooltipSpan = document.getElementById('tooltip-span');

// window.onmousemove = function (e) {
//     var x = e.clientX,
//         y = e.clientY;
//     tooltipSpan.style.top = (y + 20) + 'px';
//     tooltipSpan.style.left = (x + 20) + 'px';
// };

const cursor = document.querySelector('.epiccursor');
const cursor1 = document.querySelector('.cursormain');

document.addEventListener('mousemove', e =>{
  cursor.setAttribute("style", "top:"+(e.clientY - 15)+"px; left: "+(e.clientX- 15)+"px;")
  cursor1.setAttribute("style", "top:"+(e.clientY - 2)+"px; left: "+(e.clientX - 2)+"px;")
});

document.addEventListener('click', () =>{
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500)
} );
const links = document.querySelectorAll('body a');
links.forEach((link) => {
  link.addEventListener('mouseover', () =>{
    cursor.classList.add("grow");

  });

  link.addEventListener('mouseout', () =>{
    cursor.classList.remove("grow");
  });
});
