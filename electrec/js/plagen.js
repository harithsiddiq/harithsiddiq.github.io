$(document).ready(function(){
   $('.carousel').carousel({
       interval: 2000
   });
    
    $('.option-box .fab').click(function(){
         $('.option-box .color-optin').fadeToggle();
    });
    
    // onClick Chane defult Theme
    
        
    var colorLi = $(".color-optin ul li");
    
    colorLi
    .eq(0).css("backgroundColor","#ff4747").end()
    .eq(1).css("backgroundColor","#c17fff").end()
    .eq(2).css("backgroundColor","#0e55f0").end()
    .eq(3).css("backgroundColor","#ff7d94");
    
    
    colorLi.click(function(){
        $("link[href*='theme' ]").attr("href", $(this).attr("data-value"))
    });
    
    var scrollBtn = $(".scroll-Top");
    
    $(window).scroll(function()
    {
        
         if ($(this).scrollTop() >= 900)
            {
                scrollBtn.fadeIn();
            }
        else
            {
                scrollBtn.fadeOut();
            }
       
    });
    
     scrollBtn.click(function()
    {
        $("html,body").animate({scrollTop : 0},1000);
    })
    
});

$(window).load(function(){
    $(".loding-ovelay").fadeOut(3000);
});

