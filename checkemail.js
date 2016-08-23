$(function() {
    $('form > input').keyup(function() {
        var value = false;
        $('form > #username').each(function() {
            if ($(this).val() == '@') {
                value = true;
            }
        });

        if (!value) {
            $('#submit').attr('disabled', 'disabled');
        } else {
            $('#submit').removeAttr('disabled');
        }
    });
})();