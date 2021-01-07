$(window).on("scroll", function () {
  if ($(window).scrollTop() >= screen.availHeight / 3) {
    $(".navbar").css({
      "background-color": "rgba(30, 29, 29,.65)",
      "backdrop-filter": "blur(17px)",
    });
    $("#scroller").css({ transform: "scale(1)" });
  } else {
    $(".navbar").css({
      "background-color": "transparent",
      "backdrop-filter": "blur(0) ",
    });
    $("#scroller").css({ transform: "scale(0)" });
  }
});

$(function () {
  $(".nav-icon").click(function () {
    $(".nav-icon").toggleClass("navbar-on");
  });
});
