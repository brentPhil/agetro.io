document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");
  const menuNav = document.querySelector(".menu-nav");
  const navItems = document.querySelectorAll(".nav-item");
  let showMenu = false;

  function toggleMenu() {
    menuBtn.classList.toggle("close", !showMenu);
    menu.classList.toggle("show", !showMenu);
    menuNav.classList.toggle("show", !showMenu);
    navItems.forEach((item) => {
      item.classList.toggle("show", !showMenu);
      item.classList.toggle("close", showMenu);
    });
    showMenu = !showMenu;
  }

  menuBtn.addEventListener("click", toggleMenu);
  navItems.forEach((item) => item.addEventListener("click", toggleMenu));

  function copyToClipboard(element) {
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = document.querySelector(element).textContent;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  const btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    btn.classList.add("test");
  });

  const path = document.querySelector(".path"); // Assuming .path is a class
  path.addEventListener("animationend", () => {
    console.log("end");
    setTimeout(() => {
      btn.classList.remove("test");
    }, 1000);
  });

  $(document).mousemove((e) => {
    const positions = [
      { selector: ".cursormain", xOffset: -2, yOffset: -2 },
      { selector: ".epiccursor", xOffset: -15, yOffset: -15 },
      { selector: ".addcopy", xOffset: -38.5, yOffset: -38.5 },
    ];

    positions.forEach(({ selector, xOffset, yOffset }) => {
      $(selector).css({
        top: e.clientY + yOffset + "px",
        left: e.clientX + xOffset + "px",
      });
    });
  });

  $(document).click(() => {
    $(".epiccursor").addClass("expand");
    setTimeout(() => {
      $(".epiccursor").removeClass("expand");
    }, 500);
  });

  const hoverEffects = [
    { hover: ".sitenav", target: ".epiccursor", cursorClass: "grow" },
    { hover: "#btn", target: ".addcopy", cursorClass: "shrink", targetClass: "sitegrow" },
  ];

  hoverEffects.forEach(({ hover, target, cursorClass, targetClass }) => {
    $(hover).mouseover(() => {
      $(target).addClass(targetClass);
      $(".epiccursor").addClass(cursorClass);
    }).mouseout(() => {
      $(target).removeClass(targetClass);
      $(".epiccursor").removeClass(cursorClass);
    });
  });
});
