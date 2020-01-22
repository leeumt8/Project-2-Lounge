$(document).ready(function() {
    //references to the registration inputs
    var nameInput = $("#newUsername");
    var passInput = $("#newPassword");
    var emailInput = $("#newEmail");

    //event listener for submit button
    $(document).on("click", "#newSubmit", handleNewUserForm);

    //function to handle the new user form submission
    function handleNewUserForm(event) {
        event.preventDefault();
        // make sure all fields are filled out
        if (!nameInput.val().trim().trim() || !passInput.val().trim().trim() || !emailInput.val().trim().trim()) {
            return;
        }
    }
});