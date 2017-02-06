//========================
//CUSTOM SCROLLBAR
//========================
//$(document).ready(
//    function () {
//        $("html").niceScroll({
//            mousescrollstep: 70,
//            cursorcolor: "#ffcc29",
//            cursorwidth: "5px",
//            cursorborderradius: "10px",
//            cursorborder: "none",
//        });
//    }
//);


//========================
//SMOOTHSCROLL
//========================
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


$(document).ready(function () {
    $("#phone").mask("(99) 9999-9999?9");


    $("#phone").on("blur", function () {
        var last = $(this).val().substr($(this).val().indexOf("-") + 1);

        if (last.length == 5) {
            var move = $(this).val().substr($(this).val().indexOf("-") + 1, 1);

            var lastfour = last.substr(1, 4);

            var first = $(this).val().substr(0, 9);

            $(this).val(first + move + '-' + lastfour);
        }
    });

    $("#contato").submit(function (e) {

        //prevent Default functionality
        e.preventDefault();

        //get the action-url of the form
        var actionurl = e.currentTarget.action;

        var conteudo = $("#contato").serializeArray().reduce(function (data, item) {
            data[item.name] = item.value;
            return data;
        }, {});

        //do your own request an handle the results
        $.ajax({
            url: actionurl,
            type: 'post',
            dataType: 'json',
            data: JSON.stringify(conteudo),
            success: function (data) {
                console.log('teste');
                // ... do something with the data...
            }
        });

    });

    // $('#enviar').click(function () {
    //     $.ajax({
    //         url: 'http://api.intuitivalab.com/ph_email',
    //         type: 'post',
    //         dataType: 'json',
    //         data: $('form#contato').serialize(),
    //         success: function(data) {
    //             console.log('success');
    //                //$('form#contato').hide;
    //              }
    //     });
    // });

});
