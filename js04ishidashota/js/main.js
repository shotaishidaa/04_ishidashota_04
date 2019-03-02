// javascriptを書く方はここから下に記述していってください


$(document).ready(function(){
    $('.mainvisual').hide().fadeIn(4000);
    
    });
    
    $(function () {
        
            setTimeout('anime1()'); 
        });
        
        function anime1(){
        $('.more')
          .animate({ 'opacity' : '1' }, 500)
          .animate({ 'opacity' : '0.7' }, 500);
         setTimeout('anime1()', 1000);
        }
    $(function () {
            
            setTimeout('anime2()'); 
        });
            
        function anime2(){
        $('.submit')
         .animate({ 'opacity' : '1' }, 500)
         .animate({ 'opacity' : '0.7' }, 500);
         setTimeout('anime2()', 1000);
        }
    
    
    $(document).ready(function(){
    var submit='送信されました';
        $(".submit").on("click",function(){
            alert(submit);
    
    
    });
    });
