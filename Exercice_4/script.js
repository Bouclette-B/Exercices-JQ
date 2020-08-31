$(function () {
  $('.color').click(function () {
      let backgroundColor = $(this).attr('id');
      $('#text').css('color', backgroundColor);
  })  
})