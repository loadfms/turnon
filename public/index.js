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
    post: function () {
        var url = "/api/";
        $.ajax({
            url: url,
            method: 'POST',
            success: function (result) {
                component.get();
            }
        });
    }
}

$(function () {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    component.get();

}); // end of document ready
