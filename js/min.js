$(document).ready(function () {
  $("#btn_submit").click(function (e) {
    e.preventDefault();
    if ($("#name").val().length == 0) {
      $("#name").addClass("highlight");
      $(".error_msg").show();
      $(".success_msg").hide();
    } else {
      $("#name").removeClass("highlight");
      $(".error_msg").hide();
      $(".success_msg").show();
      // $("#sp_form").submit(function (e) {
      $.ajax({
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeMH7qH5GCExICI52qYs_r56eG4F2RfQjCTVB7YbQBZxHjtkA/formResponse",
        data: $(this).serialize(),
        type: "POST",
        dataType: "xml",
        success: function (data) {
          console.log("Submission successful");
        },
        error: function (xhr, status, error) {
          console.log("Submission failed: " + error);
        },
      });
      // });
    }
  });
});
