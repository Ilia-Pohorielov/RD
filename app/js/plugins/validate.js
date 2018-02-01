function validate(form){
    var error_class = "has-error";
    var norma_class = "has-success";
    var item        = form.find("[required]");
    var e           = 0;
    var reg         = undefined;
    var pass        = form.find('.password').val();
    var pass_1      = form.find('.password_1').val();
    var email = false;
    var password = false;
    function mark (object, expression) {
        if (expression) {
            object.parent('div').addClass(error_class).removeClass(norma_class);
            e++;
            if (email && (object.val().length > 0)) {
                object.parent('.input-group').find('.error-text').text('Некорректный формат Email');
            }
            if (password && (object.val().length > 0)) {
                object.parent('.input-group').find('.error-text').text('Пароль должен быть не менее 6 символов');
            }
            if (pass_1 !== pass) {
                object.parent('.password-field').find('.error-text').text('Пароли не совпадают');
            }
        } else
            object.parent('div').addClass(norma_class).removeClass(error_class);
    }
    form.find("[required]").each(function(){
        switch($(this).attr("data-validate")) {
            case undefined:
                mark ($(this), $.trim($(this).val()).length === 0);
            break;
            case "email":
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                mark ($(this), !reg.test($.trim($(this).val())));
            break;
            case "phone":
                reg = /[0-9 -()+]{10}$/;
                mark ($(this), !reg.test($.trim($(this).val())));
            break;
            case "pass":
                reg = /^[a-zA-Z0-9_-]+$/;
                mark ($(this), !reg.test($.trim($(this).val())));
            break;
            case "pass1":
                mark ($(this), (pass_1 !== pass || $.trim($(this).val()).length === 0));
            break;
            default:
                reg = new RegExp($(this).attr("data-validate"), "g");
                mark ($(this), !reg.test($.trim($(this).val())));
            break
        }
    });

    $('.js_valid_radio').each(function(){
     var inp = $(this).find('input.required');
        var rezalt = 0;
        for (var i = 0; i < inp.length; i++) {
         
         if ($(inp[i]).is(':checked') === true) {
          rezalt = 1;
          break;
         } else {
          rezalt = 0;
         }
        };
        if (rezalt === 0) {
            $(this).addClass(error_class).removeClass(norma_class);
            e=1;
        } else {
            $(this).addClass(norma_class).removeClass(error_class);
        }
    })
    if (e == 0) {
     return true;
    }
    else {
        form.find("."+error_class+" input:first").focus();
        return false;
    }
}
