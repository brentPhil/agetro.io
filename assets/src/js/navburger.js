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
    // btn.classList.remove("test");
    setTimeout(() => {
      btn.classList.remove("test");
    }, 1000);
  } );

const cursor = document.querySelector('.epiccursor');
const cursor1 = document.querySelector('.cursormain');
const visit = document.querySelector('.visitSite')
const caseStudy = document.querySelector('.case');
const caseM = document.querySelector('.caseStudy');
const addcopy = document.querySelector('.addcopy');

document.addEventListener('mousemove', e =>{
 cursor.setAttribute("style", "top:"+(e.clientY - 15)+"px; left: "+(e.clientX - 15)+"px;")
 cursor1.setAttribute("style", "top:"+(e.clientY - 2)+"px; left: "+(e.clientX - 2)+"px;")
 visit.setAttribute("style", "top:"+(e.clientY - 38)+"px; left: "+(e.clientX - 38)+"px;")
 caseM.setAttribute("style", "top:"+(e.clientY - 38)+"px; left: "+(e.clientX - 38)+"px;")
 addcopy.setAttribute("style", "top:"+(e.clientY - 38.5)+"px; left: "+(e.clientX - 38.5)+"px;")
});

document.addEventListener('click', () =>{
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
} );

site.addEventListener('mouseover', () =>{
  cursor.classList.add('shrink');
  visit.classList.add('sitegrow');
});

site.addEventListener('mouseout', () =>{
  cursor.classList.remove('shrink');
  visit.classList.remove('sitegrow');
});

caseStudy.addEventListener('mouseover', () =>{
  cursor.classList.add('shrink');
  caseM.classList.add('sitegrow');
});

caseStudy.addEventListener('mouseout', () =>{
  cursor.classList.remove('shrink');
  caseM.classList.remove('sitegrow');
});


const links = document.querySelectorAll('.sitenav');

links.forEach((link) => {
  link.addEventListener('mouseover', () =>{
    cursor.classList.add("grow");
  });

  link.addEventListener('mouseout', () =>{
    cursor.classList.remove("grow");
  });
});


  btn.addEventListener('mouseover', () =>{
    addcopy.classList.add("sitegrow");
    cursor.classList.add('shrink');
  });

  btn.addEventListener('mouseout', () =>{
    addcopy.classList.remove("sitegrow");
    cursor.classList.remove('shrink');
  });
