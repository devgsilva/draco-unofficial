$(document).scroll(function() {

    var menuScrollTop = $(document).scrollTop();

    if (menuScrollTop > 80) {
        $('.navbar').addClass('bg-dark-transparent');
    } else {
        $('.navbar').removeClass('bg-dark-transparent');
    }

})