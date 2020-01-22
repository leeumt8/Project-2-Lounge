//this code handles what happens when the user clicks on the submit button
$("#submit").on("click", function(event) {
    event.preventDefault();

    var User = {
        user_name: $("#username").val().trim(),
        user_password: $("#password").val().trim()
    };
    console.log(User);

    $.post("/", User)
        .then(function(data) {
            console.log(data);
        });
    $("#username").val("");
    $("#password").val("");

});