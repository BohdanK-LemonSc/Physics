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
});
