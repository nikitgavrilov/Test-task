$(document).ready(function () {
  $("#my-contacts-btn").on("click", function () {
    const top = $("#my-contacts-footer").offset().top;
    $("html, body").animate(
      {
        scrollTop: top,
      },
      1000
    );
  });
});
