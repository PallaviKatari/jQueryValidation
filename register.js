$(document).ready(function () {

    $('#first_form').submit(function (e) {
        e.preventDefault();
        var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        var email = $('#email').val();
        var password = $('#password').val();

        $(".error").remove();

        if (first_name.length < 1) {
            $('#first_name').after('<span class="error">This field is required</span>');
        }
        if (last_name.length < 1) {
            $('#last_name').after('<span class="error">This field is required</span>');
        }
        if (email.length < 1) {
            $('#email').after('<span class="error">This field is required</span>');

        }
        if (password.length < 8) {
            $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
        }
    });

});