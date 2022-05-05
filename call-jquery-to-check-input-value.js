//START: CALL JS TO CHECK INPUT VALUE (when user tab or click outside control)
    $('#register_email').blur(function () {
        register_email=$(this).val()
        //  block of code to be executed if all condition1 is false
        var settings = {
            "url": "provision?email="+register_email,
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        };
        $.ajax({
            ...settings,
            success: function (result) {
                $('.check_reg_email').show();
            },
            error: function () {
                $('.check_reg_email').hide();
            }
        })
    });
    //END: CALL JS TO CHECK INPUT VALUE (when user tab or click outside control)