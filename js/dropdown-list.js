$(document).ready(function () {
  let flag = false;
  $("#show-full").click(function () {
    if (!flag) {
      $(".item-hidden").slideDown();
      $(this).text("Свернуть");
    } else {
      $(".item-hidden").slideUp();
      $(this).text("Показать полностью");
    }
    flag = !flag;
  });
});
