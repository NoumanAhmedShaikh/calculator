$(document).ready(function () {

  let expression = "";

  $(".btn").click(function () {

    let value = $(this).val();

    if (value === "C") {
      expression = "";
      $("#result").text("0");
      return;
    }

    if (value === "=") {
      try {
        let result = eval(expression);
        $("#result").text(result);
        expression = result.toString();
      } catch (e) {
        $(".msg").show(500);
        expression = "";
      }
      return;
    }

    expression += value;
    $("#result").text(expression);

  });

  $(".close").click(function () {
        $(".msg").hide(400);
  });

});
