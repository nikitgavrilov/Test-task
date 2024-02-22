$(document).ready(function () {
  let flag = false;
  $("#show-full").click(function () {
    if (!flag) {
      $(".item-hidden").slideDown();
    } else {
      $(".item-hidden").slideUp();
    }
    flag = !flag;
  });
});
