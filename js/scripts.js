//Background transition start
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

//Background transition end

//Sticky nav bar start
var mainNav = $(".navbar-wrapper");
navbarHeight = $(".navbar").height();

$(window).scroll(function () {
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

$(".burger-menu").click(function () {
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
$(".dot").click(function () {
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

btnScrollToTop.addEventListener("click", function () {
  $("html,body").animate({ scrollTop: 0 }, "slow");
});
//Scroll to top button start

//Projects visible script
$(function () {
  if ($("body").is(".projects")) {
    var projectsCount = document.querySelectorAll(".project-width").length;
    var exteriorCount = document.querySelectorAll(".exterior").length;
    var interiorCount = document.querySelectorAll(".interior").length;
    var interiorCount = document.querySelectorAll(".planning").length;

    imageMarginBottom = 25;

    var projects = document.querySelectorAll("#project");
    const images = document.getElementsByClassName("project-image");

    var imagesSum = function (projectType) {
      var sum1 = 0;
      var sum2 = 0;
      var difference1 = 0;
      var difference2 = 10000;
      var index1 = 0;
      var index2 = 0;
      for (var a = 0; a < projects.length; a++) {
        for (var i = 0; i < a; i++) {
          if ($(projects[i]).hasClass(projectType)) {
            sum1 = sum1 + $(images[i]).height();
            index1++;
          }
        }
        sum1 = sum1 + imageMarginBottom * index1;

        for (var i = a; i < projects.length; i++) {
          if ($(projects[i]).hasClass(projectType)) {
            sum2 = sum2 + $(images[i]).height();
            index2++;
          }
        }
        sum2 = sum2 + imageMarginBottom * index2;

        difference1 = Math.abs(sum1 - sum2);

        if (window.innerWidth > 414) {
          if (difference1 < difference2) {
            difference2 = difference1;
            if (sum1 > sum2) {
              conteinerHeight = sum1;
            } else {
              conteinerHeight = sum2;
            }
          }
        } else {
          conteinerHeight = sum1 + sum2;
        }

        var index1 = 0;
        var index2 = 0;
        sum1 = 0;
        sum2 = 0;
      }

      return conteinerHeight;
    };

    var projectsButtons = document.querySelectorAll("#button");
    $(".button-text" + 1).addClass("active");

    $(".button-text").click(function () {
      let number = this.id;
      var wordLength = number.length;
      number = number.substring(wordLength - 1, wordLength);
      for (i = 0; i <= 4; i++) {
        if (number != i) {
          $(".button-text" + i).removeClass("active");
        } else {
          $(".button-text" + number).addClass("active");
        }
      }
    });
    console.log("paveikslelio aukstis1 " + $(images[0]).height());

    setInterval(
      (window.onresize = function (event) {
        // console.log("keista" + window.innerWidth);
        //console.log("keista" + window.innerHeight);
        console.log("paveikslelio aukstis2 " + $(images[0]).height());

        projectsContainerSize = imagesSum("project") + 1;
        exteriorContainerSize = imagesSum("exterior") + 1;
        interiorContainerSize = imagesSum("interior") + 1;
        planningContainerSize = imagesSum("planning") + 1;

        for (var i = 1; i <= 4; i++) {
          if (
            document
              .querySelector(".button-text" + i)
              .classList.contains("active")
          ) {
            if (i == 1) {
              var activeButtonCategory = "project";
              var activeContainerSize = projectsContainerSize;
            } else if (i == 2) {
              var activeButtonCategory = "exterior";
              var activeContainerSize = exteriorContainerSize;
            } else if (i == 3) {
              var activeButtonCategory = "interior";
              var activeContainerSize = interiorContainerSize;
            } else if (i == 4) {
              var activeButtonCategory = "planning";
              var activeContainerSize = planningContainerSize;
            }
          }
        }
        btnClick(activeButtonCategory, activeContainerSize);
      }),
      10
    );

    projectsContainerSize = imagesSum("project") + 1;
    exteriorContainerSize = imagesSum("exterior") + 1;
    interiorContainerSize = imagesSum("interior") + 1;
    planningContainerSize = imagesSum("planning") + 1;

    btnClick("project", projectsContainerSize);

    function btnClick(projectType, containerSize) {
      // project position start

      ypos1 = 0;
      ypos2 = 0;
      xpos = 0;
      for (var i = 0; i < projects.length; i++) {
        if ($(projects[i]).hasClass(projectType)) {
          if (ypos1 + $(images[i]).height() < containerSize) {
            projects[i].style.top = ypos1 + "px";
            projects[i].style.left = xpos + "px";
            ypos1 = ypos1 + $(images[i]).height() + imageMarginBottom;
          } else {
            projects[i].style.top = ypos2 + "px";
            projects[i].style.left = 51 + "%";
            ypos2 = ypos2 + $(images[i]).height() + imageMarginBottom;
          }
        } else {
          projects[i].style.top = 50 + "%";
        }
      }
      // project position end

      $(projects).each(function () {
        if (!this.classList.contains(projectType)) {
          $(this).addClass("project-invisible");
          $(this).removeClass("project-visible");
        } else {
          $(this).addClass("project-visible");
          $(this).removeClass("project-invisible");
        }
      });
      $(".projects-container-column").height(containerSize);
    }

    $(".button-text1").click(function () {
      btnClick("project", projectsContainerSize);
    });

    $(".button-text2").click(function () {
      btnClick("exterior", exteriorContainerSize);
    });

    $(".button-text3").click(function () {
      btnClick("interior", interiorContainerSize);
    });

    $(".button-text4").click(function () {
      btnClick("planning", planningContainerSize);
    });
  }
});
