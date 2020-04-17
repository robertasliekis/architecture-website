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
