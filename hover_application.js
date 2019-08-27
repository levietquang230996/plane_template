$(document).ready(function () {
    // application
    $('.bg_up').mouseover(function () {
        $('.bg_up').removeClass('active')
        $(this).addClass('active');
        $('.box h2').removeClass('text_white')
        $('.box p').removeClass('text_white')
        $(this).parent().find("h2").addClass('text_white');
        $(this).parent().find("p").addClass('text_white');
    })
    // set height for box
    const box = $('.box').width();
    $('.box').css('height', box);
    const width_box_game = $('.box_game').width();
    $('.box_game').css('height', width_box_game);

    // cach 2 ( game )
    // $('.box_game').mouseover(function () {
    //     $(this).addClass('active');
    // }).mouseout(function () {
    //     $(this).removeClass('active');
    // })

    $('#open').click(() => {
        $('.menu_hide').css('transform', 'translate(0,0)');
        $('#open').addClass('d-none').removeClass('d-block');
        $('#close').addClass('d-block').removeClass('d-none');
    })

    $('#close').click(() => {
        $('.menu_hide').css('transform', 'translate(0,-100vh)');
        $('#close').addClass('d-none').removeClass('d-block');
        $('#open').addClass('d-block').removeClass('d-none');
    })

    // scroll to top
    if ($(this).scrollTop() >= 70) {
        $('#return-to-top').fadeIn(100);
    }
    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
});

$(window).scroll(function () {
    if ($(this).scrollTop() >= 70) {
        $('#return-to-top').fadeIn(100);
    } else {
        $('#return-to-top').fadeOut(100);
    }
});


$(window).on('resize', function () {
    const box = $('.box').width();
    $('.box').css('height', box);

    const width_box_game = $('.box_game').width();
    $('.box_game').css('height', width_box_game);
});
