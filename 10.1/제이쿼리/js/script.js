$('.posts li').on('click',function(){
    console.log('dpdpp')
    var index = $(this).index();
    
    $('.post_content div').eq(index).show();
    $('.post_content div').eq(index).siblings().hide;
    
})










//var doc= document; 
//var menu = doc.getElementById('menu').getElementsByTagName('li'); 
//
//var mainDis = doc.querySelector('.main').querySelectorAll('.page');
//console.log(mainDis[0])
//
//
//function mainDisplay(){
//    
//}
//
//
//for (var i = 0; i < menu.length; i++){
//    
//    menu[i].addEventListener('click',function(){
//        menu[i].style.background = "#fff";
//        
//
//    })
//
//}