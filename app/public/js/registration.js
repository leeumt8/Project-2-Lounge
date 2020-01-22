// this code handles what happens when the  user clicks on the submit button when creating their account
$("#newSubmit").on("click", function(event) {
    event.preventDefault();

    var newUser = {
        user_name: $("#newUsername").val().trim(),
        user_password: $("#newPassword").val().trim(),
        user_email: $("#newEmail").val().trim()
    };

    $.post("/register", newUser)
        .then(function(data) {
            console.log(data);
        });
    $("#newUsername").val("");
    $("#newPassword").val("");
    $("#newEmail").val("");
});