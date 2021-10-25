$(document).ready(function () {
  $('.js-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 10,
    variableWidth: true,
    slidesToScroll: 2
  });
});

// Табы
$(function () {
  var tab = $('#tabs .tabs-items > div'); 
  tab.hide().filter(':first').show(); 

  // Клики по вкладкам.
  $('#tabs .tabs-link a').click(function(){
    tab.hide(); 
    tab.filter(this.hash).show(); 
    $('#tabs .tabs-link a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':first').click();

  // Открытие вкладки из хеша URL
  if(window.location.hash){
    $('#tabs-link a[href=' + window.location.hash + ']').click(function(event) {
      event.preventDefault();
      window.scrollTo(0, $("#" . window.location.hash).offset().top);
    });
}
});