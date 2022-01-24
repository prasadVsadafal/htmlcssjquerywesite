$(document).ready(function(){

$('.prot-item').isotope({
    // options
    itemSelector: '.item',
    layoutMode: 'fitRows'
  });

    $('.pro-menu ul li').click(function() {
    $('.pro-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.prot-item').isotope({
        filter:selector
    });
    return false;

    });
  })