const resizeWindow = () => {
  if (window.innerWidth <= 1024) {
    $(".overlay-menu").height(window.innerHeight);
  }

  window.addEventListener("resize", () => {
    $(".overlay-menu").height(window.innerHeight);
  });
};

resizeWindow();

const backgroundTransition = () => {
  $("a").click(function () {
    $(".transition-background").addClass("transition-background-active");
  });
  $("a").click(function (e) {
    e.preventDefault();
    var linkUrl = $(this).attr("href");
    setTimeout(
      function (url) {
        window.location = url;
      },
      600,
      linkUrl
    );
  });
};

backgroundTransition();

//Sticky nav bar start
const mainNav = $(".navbar-wrapper");

const stickyNavbar = () => {
  navbarHeight = $(".navbar").height();
  $(window).scroll(function () {
    if (!document.getElementById("website-wrapper").classList.contains("scroll-disabled")) {
      if ($(window).scrollTop() > navbarHeight * 2) {
        mainNav.addClass("burger-menu-sticky1");
      } else {
        mainNav.removeClass("burger-menu-sticky1");
      }
      if ($(window).scrollTop() > navbarHeight * 4) {
        mainNav.addClass("burger-menu-sticky2");
      } else {
        mainNav.removeClass("burger-menu-sticky2");
      }
      if ($(window).scrollTop() > navbarHeight * 6) {
        mainNav.addClass("burger-menu-inView");
      } else {
        mainNav.removeClass("burger-menu-inView");
      }
    }
  });
};

stickyNavbar();
//Sticky nav bar end

//Burger menu control start
const burgerMenu = document.querySelector(".burger-menu");
var scrollTop1 = 0;
var scrollTop2 = 0;
$(".burger-menu").click(function () {
  scrollTop1 = $(window).scrollTop();

  if ($(burgerMenu).hasClass("burger-active")) {
    $(burgerMenu).removeClass("burger-menu-animation burger-active");
    $(".website-wrapper").removeClass("scroll-disabled");
    $(".overlay-menu-wrapper").addClass("overlay-menu-invisible").removeClass("overlay-menu-visible");
    $(".menu-item").addClass("animation-reverse");
    document.getElementById("empty-section").style.marginTop = "0px";
    window.scrollTo(0, scrollTop2);
  } else {
    $(burgerMenu).addClass("burger-menu-animation burger-active");
    $(".overlay-menu-wrapper").addClass("overlay-menu-visible").removeClass("overlay-menu-invisible");
    $(".overlay-menu").addClass("keyframes-forward").removeClass("keyframes-reverse");
    $(".menu-item").addClass("menu-item-display").removeClass("animation-reverse");
    document.getElementById("empty-section").style.marginTop = `${-scrollTop1}px`;
    window.setTimeout(function () {
      $(".website-wrapper").addClass("scroll-disabled ");
      mainNav.addClass("burger-menu-inView");
    }, 1000);
  }
  scrollTop2 = scrollTop1;
});
//Burger menu control end

//Scroll to top button start
const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function () {
  $("html,body").animate({ scrollTop: 0 }, "slow");
});
//Scroll to top button end
