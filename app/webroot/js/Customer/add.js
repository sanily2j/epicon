$(document).ready(function () {

    $("#addCustomer").validate({
        errorElement: "span",
        rules: {
            'data[Customer][first_name]': {
                required: true,
                maxlength: 25
            },
            'data[Customer][last_name]': {
                required: true,
                maxlength: 25
            },
            'data[Customer][phone]': {
                required: true,
                maxlength: 10
            },
            'data[Customer][email]': {
                required: true,
                email: true
            }
        },
        messages: {
            'data[Customer][first_name]': {
                required: 'Please enter first name',
                maxlength: 'Length exceeds 25 charaters'
            },
            'data[Customer][last_name]': {
                required: 'Please enter last name',
                maxlength: 'Length exceeds 25 charaters'
            },
            'data[Customer][phone]': {
                required: 'Please enter phone',
                maxlength: 'Please enter valid phone number'
            },
            'data[Customer][email]': {
                required: 'Please enter email',
                email: 'Please enter valid email',
            }           
        }
    });
});

$(".saveButton").click(function () {
    $("#addCustomer").submit();
    return false;
});