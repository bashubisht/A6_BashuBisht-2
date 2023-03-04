$(document).ready(() => {
    var name = window.location.search.substr(10)
    $("#header").append(" " + name);


    $("#add").click((e) => {

        if ($("#number1").val() == "" && $("#number2").val() == "") {
            alert("Please enter both numbers");
            return;
        }

        if ($.isNumeric($("#number1").val()) == false && $.isNumeric($("#number2").val()) == false) {
            alert("Please enter a valid numbers");
            $("#number1").val("");
            $("#number2").val("");
            return;
        }
        
        if ($.isNumeric($("#number1").val()) == false) {
            alert("Please enter a valid first number");
            $("#number1").val("");
            return;
        }

        if ($.isNumeric($("#number2").val()) == false) {
            alert("Please enter a valid second number");
            $("#number2").val("");
            return;
        }

    
      let num1 = parseInt($("#number1").val());
      let num2 = parseInt($("#number2").val());
      let result = doOperation("add", num1, num2);
      $("#result").val(result);
    });

    $("#subtract").click((e) => {
      
        if ($("#number1").val() == "" && $("#number2").val() == "") {
            alert("Please enter both numbers");
            return;
        }

        if ($.isNumeric($("#number1").val()) == false && $.isNumeric($("#number2").val()) == false) {
            alert("Please enter a valid numbers");
            $("#number1").val("");
            $("#number2").val("");
            return;
        }
        
        if ($.isNumeric($("#number1").val()) == false) {
            alert("Please enter a valid first number");
            $("#number1").val("");
            return;
        }

        if ($.isNumeric($("#number2").val()) == false) {
            alert("Please enter a valid second number");
            $("#number2").val("");
            return;
        }

      let num1 = parseInt($("#number1").val());
      let num2 = parseInt($("#number2").val());
      let result = doOperation("subtract", num1, num2);
      $("#result").val(result);
    });

    $("#multiply").click((e) => {
      
        if ($("#number1").val() == "" && $("#number2").val() == "") {
            alert("Please enter both numbers");
            return;
        }

        if ($.isNumeric($("#number1").val()) == false && $.isNumeric($("#number2").val()) == false) {
            alert("Please enter a valid numbers");
            $("#number1").val("");
            $("#number2").val("");
            return;
        }
        
        if ($.isNumeric($("#number1").val()) == false) {
            alert("Please enter a valid first number");
            $("#number1").val("");
            return;
        }

        if ($.isNumeric($("#number2").val()) == false) {
            alert("Please enter a valid second number");
            $("#number2").val("");
            return;
        }

      let num1 = parseInt($("#number1").val());
      let num2 = parseInt($("#number2").val());
      let result = doOperation("multiply", num1, num2);
      $("#result").val(result);
    });

    $("#divide").click((e) => {
      
        if ($("#number1").val() == "" && $("#number2").val() == "") {
            alert("Please enter both numbers");
            return;
        }

        if ($.isNumeric($("#number1").val()) == false && $.isNumeric($("#number2").val()) == false) {
            alert("Please enter a valid numbers");
            $("#number1").val("");
            $("#number2").val("");
            return;
        }
        
        if ($.isNumeric($("#number1").val()) == false) {
            alert("Please enter a valid first number");
            $("#number1").val("");
            return;
        }

        if ($.isNumeric($("#number2").val()) == false) {
            alert("Please enter a valid second number");
            $("#number2").val("");
            return;
        }

      let num1 = parseInt($("#number1").val());
      let num2 = parseInt($("#number2").val());
      let result = doOperation("divide", num1, num2);
      $("#result").val(result);
    });


    const doOperation = (operation, num1, num2) => {
        if(operation === "add") {
            return num1 + num2;
        }
        if(operation === "subtract") {
            return num1 - num2;
        }
        if(operation === "multiply") {
            return num1 * num2;
        }
        if(operation === "divide") {
            return num1 / num2;
        }
    }

    const doNumberValidation = (numId) => {
        if ($.isNumeric($(numId).val()) == false) {
            alert("Please enter a number");
            $(numId).val("");
        }
    }

  });
  