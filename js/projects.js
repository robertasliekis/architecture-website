//Projects visible script
$(function () {
  if ($("body").is(".projects")) {
    let imageMarginBottom = 25;

    const projects = document.querySelectorAll("#project");
    const images = document.getElementsByClassName("project-image");

    var imagesSum = function (projectType) {
      var sum1 = 0;
      var sum2 = 0;
      var difference1 = 0;
      var difference2 = 10000;
      var index1 = 0;
      var index2 = 0;
      for (let a = 0; a < projects.length; a++) {
        for (let i = 0; i < a; i++) {
          if ($(projects[i]).hasClass(projectType)) {
            sum1 = sum1 + $(images[i]).height();
            index1++;
          }
        }
        sum1 = sum1 + imageMarginBottom * index1;

        for (let i = a; i < projects.length; i++) {
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

    $(".button-text" + 1).addClass("active");

    $(".button-text").click(function () {
      let number = this.id;
      let wordLength = number.length;
      number = number.substring(wordLength - 1, wordLength);
      for (let i = 0; i <= 4; i++) {
        if (number != i) {
          $(`.button-text${i}`).removeClass("active");
        } else {
          $(`.button-text${number}`).addClass("active");
        }
      }
    });

    setInterval(
      (window.onresize = function (event) {
        projectsContainerSize = imagesSum("project") + 1;
        exteriorContainerSize = imagesSum("exterior") + 1;
        interiorContainerSize = imagesSum("interior") + 1;
        planningContainerSize = imagesSum("planning") + 1;
        var activeButtonCategory;
        var activeContainerSize;
        for (let i = 1; i <= 4; i++) {
          if (document.querySelector(`.button-text${i}`).classList.contains("active")) {
            if (i == 1) {
              activeButtonCategory = "project";
              activeContainerSize = projectsContainerSize;
            } else if (i == 2) {
              activeButtonCategory = "exterior";
              activeContainerSize = exteriorContainerSize;
            } else if (i == 3) {
              activeButtonCategory = "interior";
              activeContainerSize = interiorContainerSize;
            } else if (i == 4) {
              activeButtonCategory = "planning";
              activeContainerSize = planningContainerSize;
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
            projects[i].style.top = `${ypos1}px`;
            projects[i].style.left = `${xpos}px`;
            ypos1 = ypos1 + $(images[i]).height() + imageMarginBottom;
          } else {
            projects[i].style.top = `${ypos2}px`;
            projects[i].style.left = "51%";
            ypos2 = ypos2 + $(images[i]).height() + imageMarginBottom;
          }
        } else {
          projects[i].style.top = "50%";
        }
      }
      // project position end

      $(projects).each(function () {
        if (!this.classList.contains(projectType)) {
          $(this).addClass("project-invisible").removeClass("project-visible");
        } else {
          $(this).addClass("project-visible").removeClass("project-invisible");
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
