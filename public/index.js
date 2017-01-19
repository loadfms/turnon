var component = {
    get: function () {


        var url = "/api/";
        $.ajax({
            url: url,
            success: function (result) {
                var text = 'Ligar';
                if (result) {
                    text = 'Desligar';
                }
                $('#btn-send').html(text);


            }
        });
    },
    post: function (sender) {
        $(sender).css('display', 'none');
        $('#loading').css('display', 'inline-block');

        var url = "/api/";
        $.ajax({
            url: url,
            method: 'POST',
            success: function (result) {
                component.get();
            }
        });

        $('#loading')
            .delay(3000)
            .queue(function (next) {
                $(this).css('display', 'none');
                next();
            });

        $('#btn-send')
            .delay(3000)
            .queue(function (next) {
                $(this).css('display', 'inline-block');
                next();
            });
    }
}

$(function () {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    component.get();

}); // end of document ready
