$(document).ready(function () {
  $("#check-it-out-btn").click(function () {
    $("#check-it-out").toggleClass("shown");

    $("#check-it-out-btn").hide();

    if ($("#check-it-out").hasClass("shown")) {
      $("#check-it-out-btn").text("Hide content");
      $("#check-it-out").fadeIn("slow", function () {
        $("#check-it-out-btn").fadeIn("slow");
      });
    } else {
      $("#check-it-out-btn").text("Load some content");
      $("#check-it-out").fadeOut("slow", function () {
        $("#check-it-out-btn").fadeIn("slow");
      });
    }
  });
});
