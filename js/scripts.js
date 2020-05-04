if (window.innerWidth <= 1024) {
  $(".overlay-menu-wrapper").height(window.innerHeight - 56);
  $(".welcome-background").height(window.innerHeight / 2);
}

if (window.innerWidth <= 414) {
  $(".welcome-background").height(window.innerHeight - 144);
}

window.addEventListener("resize", () => {
  $(".overlay-menu-wrapper").height(window.innerHeight - 56);
  $(".welcome-background").height(window.innerHeight / 2);
  if (window.innerWidth <= 414) {
    $(".welcome-background").height(window.innerHeight - 144);
  }
});

//Burger menu control start
var timesClicked = 0;
var scrollTop1 = 0;
var scrollTop2 = 0;

$(".burger-menu-wrapper").click(function () {
  var scrollTop1 = $(window).scrollTop();

  if (timesClicked % 2 != 0) {
    $(".overlay-menu-wrapper").addClass("overlay-menu-visible");

    if (window.innerWidth <= 414) {
      document.getElementById("empty-section").style.marginTop =
        -scrollTop1 + "px";
      window.setTimeout(function () {
        $(".website-wrapper").addClass("scroll-disabled ");
      }, 600);
    }
  } else {
    $(".overlay-menu-wrapper").removeClass("overlay-menu-visible");

    if (window.innerWidth <= 414) {
      $(".website-wrapper").removeClass("scroll-disabled");
      document.getElementById("empty-section").style.marginTop = "0px";
      window.scrollTo(0, scrollTop2);
    }
  }
  timesClicked++;
  if (timesClicked > 1) {
    timesClicked = 0;
  }
  scrollTop2 = scrollTop1;
});

//Burger menu control end

//Search bar fieldstart
var index = 1;
$(".search-button").click(function () {
  if (index % 2 != 0) {
    $(".search-field").addClass("search-field-open");
    $(".become-client").addClass("button-invisible");
  } else {
    $(".search-field").removeClass("search-field-open");
    $(".become-client").removeClass("button-invisible");
  }
  index++;
  if (index > 1) {
    index = 0;
  }
});
//Search bar field end

//Chat button start
var timesClicked = 1;
$(".chat-button").click(function () {
  if (timesClicked % 2 != 0) {
    $(".icon-wrapper").addClass("chat-button-active");
    $(".chat-window").addClass("chat-window-active");
  } else {
    $(".icon-wrapper").removeClass("chat-button-active");
    $(".chat-window").removeClass("chat-window-active");
  }
  timesClicked++;
  if (timesClicked > 1) {
    timesClicked = 0;
  }
});
//chat button end

//On scroll chat button animation start
$(window).on("scroll", function () {
  var footerTop = $(".footer-section").offset().top;
  var chatButtonTop = $(".chat-button").offset().top;
  if (chatButtonTop > footerTop - 100) {
    $(".chat-button").addClass("chat-button-bottom");
    $(".chat-window").addClass("chat-window-bottom");
  } else {
    $(".chat-button").removeClass("chat-button-bottom");
    $(".chat-window").removeClass("chat-window-bottom");
  }
});
//On scroll chat button animation end

//Vieport height stays the same when mobile keyboard appears
/*setTimeout(function () {
  let viewheight = $(window).height();
  let viewwidth = $(window).width();
  let viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute(
    "content",
    "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0"
  );
}, 100);*/
