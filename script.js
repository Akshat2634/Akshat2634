function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let prevScrollPos = window.pageYOffset;
let prevScrollPosFooter = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  // Scrolling behavior for desktop nav
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    document.getElementById('desktop-nav').classList.add('visible');
    document.getElementById('desktop-nav').classList.remove('hidden');
  } else {
    // Scrolling down
    document.getElementById('desktop-nav').classList.add('hidden');
    document.getElementById('desktop-nav').classList.remove('visible');
  }

  // Scrolling behavior for footer
  if (prevScrollPosFooter < currentScrollPos) {
    // Scrolling down
    document.querySelector('footer').classList.add('visible');
    document.querySelector('footer').classList.remove('hidden');
  } else {
    // Scrolling up
    document.querySelector('footer').classList.remove('visible');
    document.querySelector('footer').classList.add('hidden');
  }

  prevScrollPos = currentScrollPos;
  prevScrollPosFooter = currentScrollPos;
};
