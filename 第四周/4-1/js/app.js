var fontSize = 100;
var elm = document.documentElement;
elm.style.fontSize = fontSize * (elm.clientWidth / 320) + 'px';
$(function () {
    $("#header span.right").on("click", function () {
        var val = $(this).attr('class');
        if (val.indexOf('on') == -1) {
            $(this).addClass('on');
            $(".menu").show(0).stop().animate({
                height: '4.1rem'
            }, 0);
        } else {
            $(this).removeClass('on');
            $(".menu").hide(0).stop().animate({
                height: '0'
            }, 0);
        }
    })

    $(".menu a").on("click", function () {
        $(this).parents(".menu").hide();
        $("#header span.right").removeClass('on');
    })

});


