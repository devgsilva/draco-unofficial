$('.nav-left-floating .nav-left-floating-item').click(function() {
    $('.nav-left-floating .nav-left-floating-item').removeClass('active');
    $(this).addClass('active');
})

$(document).scroll(function() {

    var positionObjectDraco = $('#the-draco').position().top - 300;

    var positionObjectExchange = $('#exchange').position().top - 150;

    var positionObjectCharacteristics = $('#characteristics').position().top - 550;

    var positionScroll = $(document).scrollTop();

    if (positionScroll > positionObjectDraco) {
        $('.the-draco-item-menu').addClass('active');
        $('.exchange-item-menu').removeClass('active');
        $('.characteristics-item-menu').removeClass('active');
    }
    if ((positionScroll > positionObjectExchange)) {
        $('.the-draco-item-menu').removeClass('active');
        $('.characteristics-item-menu').removeClass('active');
        $('.exchange-item-menu').addClass('active');
    }

    if ((positionScroll > positionObjectCharacteristics)) {
        $('.the-draco-item-menu').removeClass('active');
        $('.exchange-item-menu').removeClass('active');
        $('.characteristics-item-menu').addClass('active');
    }
    if (positionScroll < positionObjectDraco) {
        $('.the-draco-item-menu').removeClass('active');
        $('.exchange-item-menu').removeClass('active');
        $('.characteristics-item-menu').removeClass('active');
    }

})