$(document).ready(function () {
 
  //---------nice scroll-------------

    $('html').niceScroll();
  //-----------------------------
 

    $('.carousel').carousel({
        interval: 2000
      });

      $('.gear-check').click(function() {

        $('.color-option').fadeToggle();
      });


      $('.color-option ul li').eq(0).css("background","#E41B17").end()
      .eq(1).css("background","#E426D5").end().
      eq(2).css("background","#009AFF").end().
      eq(3).css("background","#FFD500").end().
      eq(4).css("background","#4caf50").end();



      $('.color-option ul li').click(function() {

        $('link[href*="theme"]').attr("href",$(this).attr('data-value')); 
      });
  
      $(window).load(function() {

        $('body').css('overflow','auto');
        $('.loading-overlay .sk-folding-cube').fadeOut(1000, function(){
      
          $(this).parent().fadeOut(1000, function(){
              $(this).remove();
          });
        });
      
      });


      // scroll top
      var scrollButton = $('#scroll-top ');
      $(window).scroll(function() {
        console.log($(this).scrollTop());
        if($(this).scrollTop() >= 700) {
          scrollButton.show(); 
        }else {
          scrollButton.hide();
        }

        scrollButton.click(function() {

          $('html,body').animate({scrollTop: 0}, 600);
        });
      });
});






 

