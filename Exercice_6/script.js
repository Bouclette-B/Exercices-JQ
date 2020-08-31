$(function() {
    $('.color').hover(function () {
        let textColor = $(this).attr('id');
        textColor = $('#text').css('color', textColor);
    })
    $('.color').mouseout(function () {
        $('#text').css('color', 'black');
    }) 
})