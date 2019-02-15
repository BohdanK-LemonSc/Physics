$(document).ready(function () {

    $('.physics_slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1
    });
    $(function () {
        $("#login").dialog({
                autoOpen: false,
                show: {duration: 200},
                hide: {duration: 200},
                resizable: false,
                draggable: false,
                position: {at: "center top+70px", of: "#login-btn"}
            }
        )
    });

    $('#login-btn').click(function () {
        $("#login").dialog('open');
    });
    // $( ".selector" ).dialog( "close" );

    $(function () {
        $("#signup").dialog({
                autoOpen: false,
                show: {duration: 200},
                hide: {duration: 200},
                resizable: false,
                draggable: false,
                modal: true
            }
        )
    });

    $('.btn_sign').click(function () {
        $("#signup").dialog('open');
    });


    (function () {
        [].slice.call(document.querySelectorAll('.menu')).forEach(function (menu) {
            var menuItems = menu.querySelectorAll('.menu__link'),
                setCurrent = function (ev) {
                    ev.preventDefault();

                    var item = ev.target.parentNode; // li

                    // return if already current
                    if (classie.has(item, 'menu__item--current')) {
                        return false;
                    }
                    // remove current
                    classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
                    // set current
                    classie.add(item, 'menu__item--current');
                };

            [].slice.call(menuItems).forEach(function (el) {
                el.addEventListener('click', setCurrent);
            });
            //    ********************** on hover listener ************************************

            [].slice.call(menuItems).forEach(function (el) {
                el.addEventListener('mouseover', setCurrent);
            });
        });

        // *****************************************************************************
        [].slice.call(document.querySelectorAll('.link-copy')).forEach(function (link) {
            link.setAttribute('data-clipboard-text', location.protocol + '//' + location.host + location.pathname + '#' + link.parentNode.id);
            new Clipboard(link);
            link.addEventListener('click', function () {
                classie.add(link, 'link-copy--animate');
                setTimeout(function () {
                    classie.remove(link, 'link-copy--animate');
                }, 300);
            });
            //*********************** if on hover ****************************

            link.addEventListener('mouseover', function () {
                classie.add(link, 'link-copy--animate');
                setTimeout(function () {
                    classie.remove(link, 'link-copy--animate');
                }, 300);
            });

            //    ****************************************************

        });
    })(window);
});

$(window).load(function () {
    $("#signup").parent().addClass("style-signup");
});