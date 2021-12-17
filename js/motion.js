
var ag=setInterval("autoG()",3000);


function autoG(){
   $(".intro_list").stop().animate({marginLeft:"-200%"},function(){
      $(".intro_list li:first").appendTo(".intro_list");
      $(".intro_list").css({marginLeft:"-100%"});
   });
};





$(function(){

//----------------------------------------------------------------------------

   $("#header_wrap>p").click( function(){
      $("nav").stop().animate({marginLeft:0}, "fast");

   });

   $("nav>p button").click( function(){
      $("nav").stop().animate({marginLeft:"-100%"}, "fast");
   });

   $(".gnb li").click(function(){

         if(   $(window).width() < 1150   ){

	$("html, body").stop().animate({ scrollTop:1000*($(this).index()+1) });
	$("nav").fadeOut("fast");

         }else{

	$("html, body").stop().animate({ scrollTop:1000*($(this).index()+1) });
	$("nav").show().css({float:"right"});

         };

   });

//----------------------------------------------------------------------------

   $(".intro_list li:last").prependTo(".intro_list");
   $(".intro_list").css({marginLeft:"-100%"});
   $(".intro_btn li:eq(1)").mousedown(function(){ 
         clearInterval(ag);
         autoG();
   });

   $(".intro_btn li:eq(0)").mousedown(function(){ //이전버튼
         clearInterval(ag);
         $(".intro_list").stop().animate({marginLeft:0}, function(){
      	$(".intro_list li:last").prependTo(".intro_list");
      	$(".intro_list").css({marginLeft:"-100%"});
         });
   });



   $(".intro_btn li").mouseup(function(){ 
      ag=setInterval("autoG()",3000);

   });


//-----------------------------------------------------------------------------

   $(".top_btn button").click(function(){
      $("html,body").stop().animate({scrollTop:0});

   });

//----------------------------------------------------------------------------


   $(".portfolio_llist").before("<div class='modal'><p><img src='images/dk_web.jpg' alt='동국제약 가상리뉴얼 웹버전 설명서'></p></div>");


   $(".modal").css({
	position:"absolute", left:0, top:5950, width:"100%", height:"120%", background:"rgba(0,0,0,0.7)", display:"none"} );

   $(".modal p").css({
	position:"absolute", left:"50%", top:"50%",
	margin:"-500px 0 0 -600px", zIndex:1
   });

   $(".portfolio_llist li:eq(0)").click(function(){
	$(".modal").stop().fadeIn(300);
   });

   $(".modal").click(function(){
         $(this).stop().fadeOut(300);
   });

   $(".portfolio_llist").before("<div class='modal2'><p><img src='images/dk_mob.jpg' alt='동국제약 가상리뉴얼 모바일버전 설명서'></p></div>");


   $(".modal2").css({
	position:"absolute", left:0, top:5950, width:"100%", height:"120%", background:"rgba(0,0,0,0.7)", display:"none"} );

   $(".modal2 p").css({
	position:"absolute", left:"50%", top:"50%",
	margin:"-500px 0 0 -600px", zIndex:1
   });

   $(".portfolio_llist li:eq(1)").click(function(){
	$(".modal2").stop().fadeIn(300);
   });

   $(".modal2").click(function(){
         $(this).stop().fadeOut(300);
   });





}); //끝



/*
   $(".gnb li").click(function(){
         $("html,body").stop().animate({ scrollTop:1000*$(this).index() });
            if(   $(window).width() < 1150   ){

	   $("html, body").stop().animate({ scrollTop:1000*$(this).index() });
	   $("nav").fadeOut("fast");

            }else{

	   $("html, body").stop().animate({ scrollTop:1000*$(this).index() });
	   $("nav").show().css({float:"right"});

            };

   });
*/


