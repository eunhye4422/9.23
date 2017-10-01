var data = {
    stack : [
        {id : 1, stack : 'HTML', type : 'FE'},
        {id : 2, stack : 'PHP', type : 'BE'},
        {id : 3, stack : 'PYTHON', type : 'BE'},
        {id : 4, stack : 'CSS', type : 'FE'},
        {id : 5, stack : 'JAVA', type : 'BE'},
        {id : 6, stack : 'JAVASCRIPT', type : 'FE'},
        {id : 7, stack : 'REACT', type : 'FE'},
        {id : 8, stack : 'NODE', type : 'ALL'},
    ]
}




function view(arr){
    
    $('#stackList').empty();
    
    for( var i = 0; i < data.stack.length; i++){
            var tag = $('<div>').text(arr[i].stack); 
            $('#stackList').append(tag);
    }
}

$('#selectType li').on('click',function(){
    
    var type = $(this).attr('data-type');
    var result = data.stack.filter(function(v,i){
        return v.type == type; 
    })
    view(result); 

})



//
//
//
//
//var doc = document; 
////var selectType =  doc.getElementById('selectType').getElementsByTagName('li');
//
//
//
//
//
//$('#selectType li').on('click',function(){
//    
//    var index = $(this).index(); 
//    
//    if (index == 0) {
//        listView('FE'); 
//    } else if (index == 1) {
//        listView('BE'); 
//    } else if (index == 2) {
//        listView('ALL'); 
//    }
//    
//    
//});
//
//
//
//
//
///*$('#selectType li').eq(0).on('click',function(){
//    console.log('click')
//    listView('FE'); 
//});
//
//
//$('#selectType li').eq(1).on('click',function(){
//    listView('BE'); 
//});
//
//
//
//$('#selectType li').eq(2).on('click',function(){
//    listView('ALL'); 
//});*/
//
//
//
//
//
//
//
//
//
//
//// list로 일단 다 적는코드 
//
//function listView(type){
//    
//    
//    $('#stackList').empty();
//
//    for( var i = 0; i < data.stack.length; i++){
//        
//        if (type == data.stack[i].type) {
//        
//            var tag = $('<div>').text(data.stack[i].stack); 
//            $('#stackList').append(tag);
//            
//        }
//    //createElement.innerHTML
//    }
//
//}
//
//
////listView();
//
//
//
////
////
//////1,4,6,7
////selectType[0].addEventListener('click',function(){
////    var div = doc.createElement('div');
////    div.innerHTML = data.stack[1];
////    list4.appendChild(node);
////})
//
