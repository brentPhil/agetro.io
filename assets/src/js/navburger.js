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
  
  
  path.addEventListener("animationend",()=>{
    console.log("end")
    
    setTimeout(() => {
      btn.classList.remove("test");
    }, 1000);
  } );

$(document).mousemove(function (e) {
  $('.cursormain').attr("style", "top:"+(e.clientY - 2)+"px; left: "+(e.clientX - 2)+"px;")
  $('.epiccursor').attr("style", "top:"+(e.clientY - 15)+"px; left: "+(e.clientX - 15)+"px;")
  $('.addcopy').attr("style", "top:"+(e.clientY - 38.5)+"px; left: "+(e.clientX - 38.5)+"px;")
  $('.siteprev').attr("style", "top:"+ e.clientY +"px; left: "+ e.clientX +"px;")
});

$(document).click(function () {
  $('.epiccursor').addClass('expand');
  setTimeout(function() { 
  $('.epiccursor').removeClass("expand");
  }, 500);
});

$('.kz').mouseover(function() {
  $('.siteprev').addClass('imgprev');
  $('.epiccursor').addClass('shrink');
});

$('.kz').mouseout(function() {
  $('.siteprev').removeClass('imgprev');
  $('.epiccursor').removeClass('shrink');
});

$('.sitenav').mouseover(function() {
  $('.epiccursor').addClass('grow');
});

$('.sitenav').mouseout(function() {
  $('.epiccursor').removeClass('grow');
});

$('#btn').mouseover(function() {
  $('.addcopy').addClass('sitegrow');
  $('.epiccursor').addClass('shrink');
});

$('#btn').mouseout(function() {
  $('.addcopy').removeClass('sitegrow');
  $('.epiccursor').removeClass('shrink');
});