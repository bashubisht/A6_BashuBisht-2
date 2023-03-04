$(document).ready(() => {

    var userName = "";

    $("#form").submit((e) => {
        var noSignInAlertShown = false;
      e.preventDefault();
      let name = $("#userName").val();
      let email = $("#email").val();
      let password = $("#password").val();
      let emailRegex = new RegExp("[a-z0-9]+@northeastern.edu");
      let userNameRegex = new RegExp("^[A-Za-z]");
      if (
        name.length < 1 ||
        !userNameRegex.test(name) ||
        !emailRegex.test(email) ||
        password.length < 7
      ) {
        if (name.length < 1 || !userNameRegex.test(name)) {
            $("#name_err").remove();
            if (name.length < 1) {
                $("#userName").after(
                "<div id='name_err' class='error'>Please enter a User Name</div>"
                );
            } else if (!userNameRegex.test(name)) {
                $("#userName").after(
                "<div id='name_err' class='error'>Please enter a valid name</div>"
                );
            }

            if(!noSignInAlertShown) {
                alert("Unable to Sign In, please check error messages!")
                noSignInAlertShown = true;
            }
            
        } else {
          $("#name_err").remove();
        }

        if(email.length < 1 || !emailRegex.test(email)) {
            $("#email_err").remove();
            if (email.length < 1) {
                $("#email").after(
                "<div id='email_err' class='error'>Please enter an email id</div>"
                );
            } else if(!emailRegex.test(email)) {
                $("#email").after(
                    "<div id='email_err' class='error'>Please enter a valid Northeastern Email Id</div>"
                  );
            }
            if(!noSignInAlertShown) {
                alert("Unable to Sign In, please check error messages!")
                noSignInAlertShown = true;
            }
        } else {
            $("#email_err").remove();
        }

        if (password.length < 7) {
            $("#password_err").remove();
            $("#password").after(
                "<div id='password_err' class='error'>Password should be a minimum of 7 characters</div>"
              );
              if(!noSignInAlertShown) {
                alert("Unable to Sign In, please check error messages!")
                noSignInAlertShown = true;
            }
        } else {
          $("#password_err").remove();
        }
      } else {
        window.location.replace("./calculator.html?userName="+name);
      }
      noSignInAlertShown = false;
    });


  });