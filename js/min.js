// $(document).ready(function () {
//   var $form = $("form");
//   $form.submit(function () {
//     console.log("submited");
//     $(".contact_form").addClass("contact_form_hide");
//     $(".sucess_message").fadeIn();
//     return false;
//   });
// });

$(document).ready(function () {
  var $form = $("form");
  $form.submit(function () {
    $.post($(this).attr("action"), $(this).serialize(), function (response) {
      console.log("submited");
    });
    return false;
  });
});

$(document).ready(function () {
  $("#btn_submit").click(function () {
    if ($("#name").val().length == 0) {
      $("#name").addClass("highlight");
      $(".error_msg").show();
      $(".success_msg").hide();
    } else {
      $("#name").removeClass("highlight");
      $(".error_msg").hide();
      $(".success_msg").show();
    }
    if ($("#mobile").val().length == 0) {
      $("#mobile").addClass("highlight");
      $(".error_msg").show();
      $(".success_msg").hide();
    } else {
      $("#mobile").removeClass("highlight");
      $(".error_msg").hide();
      $(".success_msg").show();
    }
    if ($("#email").val().length == 0) {
      $("#email").addClass("highlight");
      $(".error_msg").show();
      $(".success_msg").hide();
    } else {
      $("#email").removeClass("highlight");
      $(".error_msg").hide();
      $(".success_msg").show();
    }
    var email = $("#email").val();
    var regex =
      /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
      $("#email").addClass("highlight");
      $(".error_msg").show();
      $(".success_msg").hide();
    } else {
      $("#email").removeClass("highlight");
      $(".error_msg").hide();
      $(".success_msg").show();
    }

    if ($("#rooms").val().length == 0) {
      $("#rooms").addClass("highlight");
      $(".error_msg").show();
      $(".success_msg").hide();
    } else {
      $("#rooms").removeClass("highlight");
      $(".error_msg").hide();
      $(".success_msg").show();
    }
    if ($("#adults").val().length == 0) {
      $("#adults").addClass("highlight");
      $(".error_msg").show();
      $(".success_msg").hide();
    } else {
      $("#adults").removeClass("highlight");
      $(".error_msg").hide();
      $(".success_msg").show();
    }
    if ($("#kids").val().length == 0) {
      $("#kids").addClass("highlight");
      $(".error_msg").show();
      $(".success_msg").hide();
    } else {
      $("#kids").removeClass("highlight");
      $(".error_msg").hide();
      $(".success_msg").show();
    }
    if (!$("#property").val()) {
      $("#property").addClass("highlight-select");
      $(".error_msg").show();
      $(".success_msg").hide();
    } else {
      $("#property").removeClass("highlight-select");
      $(".error_msg").hide();
      $(".success_msg").show();
    }
    if ($("#check_in").is(":checked")) {
      $(".formfield_checkin").removeClass("highlight-radio");
      $(".error_msg").hide();
      $(".success_msg").show();
    } else {
      $(".formfield_checkin").addClass("highlight-radio");
      $(".error_msg").show();
      $(".success_msg").hide();
    }
    if ($("#check_out").is(":checked")) {
      $(".formfield_checkout").removeClass("highlight-radio");
      $(".error_msg").hide();
      $(".success_msg").show();
    } else {
      $(".formfield_checkout").addClass("highlight-radio");
      $(".error_msg").show();
      $(".success_msg").hide();
    }
  });
});
