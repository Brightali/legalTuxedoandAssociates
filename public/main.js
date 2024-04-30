const lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  let header = document.getElementById("header");

  if (currentScroll > lastScrollTop) {
    // Scroll down
    header.classList.add("transform", "-translate-y-[100px]");
  } else {
    // Scroll up
    header.classList.remove("transform", "-translate-y-[100px]");
  }

  lastScrollTop = currentScroll;
});

function openNav() {
  const mobileNav = document.getElementById("mobile-nav");
  const mobileNavList = document.getElementById("mobile-nav-list");

  mobileNavList.classList.remove("closeMobileNav");
  mobileNav.classList.toggle("hidden");
  mobileNavList.classList.add("openMobileNav");

  cart.classList.add("hidden");
}

function closeNav() {
  const mobileNav = document.getElementById("mobile-nav");
  const mobileNavList = document.getElementById("mobile-nav-list");
  mobileNavList.classList.add("closeMobileNav");
  setTimeout(() => {
    mobileNav.classList.toggle("hidden");
    mobileNavList.classList.remove("openMobileNav");
  }, 510);
}
