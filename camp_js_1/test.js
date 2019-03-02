
// //  ーーーーーーーーーーーーーーーーーーーー演習１ ーーーーーーーーーーーーーーーーーーーー
// console.log("はじめてのジャバスクリプト");

// //  ーーーーーーーーーーーーーーーーーーーー演習２ ーーーーーーーーーーーーーーーーーーーー
// console.log(23+5);
// console.log(2000-1800);
// console.log("18+5");
// console.log(18/3);
// console.log(3*4);

// // 演習３
// var name="石田将太";
// console.log("自分の名前");
// console.log(name);
// var name="自分の名前";

// //  ーーーーーーーーーーーーーーーーーーーー演習４ ーーーーーーーーーーーーーーーーーーーー
// 　var point=90;
//     if(point >= 80){
//         console.log("素晴らしい！おめでとう！")
//     }else{
//         console.log("もっと頑張りましょう！")
//     }

// // ーーーーーーーーーーーーーーーーーーーー 演習５ ーーーーーーーーーーーーーーーーーーーー
// // 0〜4までの５パターンの乱数
// // var math=Math.floor( Math.random() *5);
// // console.log(math);
// // if(math >= 4){
// //     console.log("日本") ;   
// // }else if(math >= 3){
// //     console.log("アメリカ");
// // }else if(math >= 2){
// //     console.log("イギリス");
// // }else if(math >= 1){
// //     console.log("ブラジル");
// // }else{
// //     console.log("エジプト");
// // }

// // 1〜５までの５パターンの乱数
// var math=Math.floor( Math.random() *5 + 1);
// console.log(math);
// if(math == 5){
//     console.log("日本") ;   
// }else if(math == 4){
//     console.log("アメリカ");
// }else if(math == 3){
//     console.log("イギリス");
// }else if(math == 2){
//     console.log("ブラジル");
// }else if(math == 1){
//     console.log("エジプト");
// }

// ーーーーーーーーーーーーーーーーーーーーjquery 事前準備２ ーーーーーーーーーーーーーーーーーーーー


    // $("#test").on("click",function(){
    // $('#test').html('あああああ');
    // $('#test').css('color', '#f00');

    // setInterval(function())


    // $('#test').fadeOut(2000);
    // $('#test').fadeIn(2000);
    // fadeInは要素が消えていないと効果がでないので注意

    // ーーーーーーーーーーーーーーーーーjavascrupt実習　演習ーーーーーーーーーーーーーーーーーー

    
    // $("#hide").on("click",function(){
    //     $('#ex').fadeOut(2000);
    // $("#show").on("click",function(){
    //     $('#ex').fadeIn(2000);
    
    
  
    //カウンタの初期値を設定
    // var count = 0;

    // $("#show").on("click",function(){

    //     //countに 1 を加算
    //     count++;

    //     $("#test").css('border',count + "px solid #f00");
    //     $("#test").html(count);
    
    // });


    // ーーーーーーーーーーーーjQueryセレクタ+関数を使おう! 演習ーーーーーーーーーーーー

$(document).ready(function(){
    
    $('#ex').hide().fadeIn(4000);

    var kline = '<p>かきくけこ</p>'
    $('#ex').html(kline);

    $('#ex').css('background-color', '#000');
    $('#ex').css('color', '#fff');

    var aline = '<p>あいうえお</p>'
    $('#ex').prepend(aline);

    var sline = '<p>さしすせそ</p>'
    $('#ex').append(sline);
    
    // $('＃ex p:odd').css('background-color', '#000');
    $('＃ex p:even').css('background-color', '#fff');





});

        
 
