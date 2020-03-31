//Sticky nav bar start
var mainNav = $(".navbar-wrapper");
navbarHeight = $(".navbar").height();

$(window).scroll(function() {
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
});
//Sticky nav bar end

//Burger menu control start
const burger = document.querySelector(".burger-menu");
var timesClicked = 0;

$(".burger-menu").click(function() {
  if (timesClicked % 2 != 0) {
    burger.classList.toggle("burger-menu-animation");
    burger.classList.toggle("burger-active");
    $(".menu-item").addClass("animation-reverse");
    $(".overlay-menu-wrapper").addClass("overlay-menu-invisible");
    $(".overlay-menu-wrapper").removeClass("overlay-menu-visible");
  } else {
    $(".overlay-menu-wrapper").removeClass("overlay-menu-invisible");
    $(".overlay-menu").addClass("keyframes-forward");
    $(".menu-item").removeClass("animation-reverse");
    $(".overlay-menu").removeClass("keyframes-reverse");
    burger.classList.toggle("burger-active");
    burger.classList.toggle("burger-menu-animation");
    $(".menu-item").addClass("menu-item-display");
    $(".overlay-menu-wrapper").addClass("overlay-menu-visible");
  }
  timesClicked++;
  if (timesClicked > 1) {
    timesClicked = 0;
  }
});
//Burger menu control end

//Background section carousel start
$(".dot").click(function() {
  let number = this.id;
  var wordLength = number.length;
  number = number.substring(wordLength - 1, wordLength);
  for (i = 0; i <= 3; i++) {
    if (number != i) {
      $(".dot" + i).removeClass("dot-active");
      $(".background-image" + i).removeClass("visible");
      $(".background-text" + i).removeClass("text-visible");
      $(".background-text" + i).removeClass("text-move");
      $(".button").removeClass("visible");
      if (i <= 1) {
        $(".dot").removeClass("dot-border-black");
        $(".dot-inside").removeClass("dot-black");
        $(".dot-active").removeClass("dot-black");
      }
    } else {
      $(".dot" + number).addClass("dot-active");
      $(".background-image" + number).addClass("visible");
      $(".background-text" + number).addClass("text-visible");
      $(".background-text" + number).addClass("text-move");
      if (number == 2) {
        $(".dot").addClass("dot-border-black");
        $(".dot" + number).addClass("dot-black");
        $(".dot-inside").addClass("dot-black");
        $(".background-text" + number).addClass("text-black");
      }
      if (number == 3) {
        $(".button").addClass("visible");
      }
    }
  }
});
//Background section carousel end

//Scroll to top button start
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function() {
  $("html,body").animate({ scrollTop: 0 }, "slow");
});
//Scroll to top button start
