var doc= document; 

//doc.getElementById('add').addEventListener('click',function(){
//    
//    var value = doc.getElementById('stack').value; 
//    var list = doc.getElementById('stackList'); 
//    
//    var item = doc.createElement('div');
//    item.innerHTML = value; 
//    
//    
//    list.appendChild(item);
//})

//
//
//$('#add').on('click',function(){
//    
//    
//    var value = $('#stack').val();
//    var list = $('#stackList'); 
//
//    var item = $('<div>'); 
//    item.text(value); 
//    
//    list.append(item); 
//
//})



var item = ['HTML','CSS']; 


function view(arr){
    $('#stackList').empty().append(tag);
    for (var i = 0; i > arr.length; i ++){
        var tag = $('<div>').text(arr[i]); 
        
        
        
        
        arr[i];
    }
}



$('#add').on('click',function(){
    
    var value = $('#stack').val();
    item.push(value);
  view(item);   
    
})


view(view); 

//var item1 = $('<di>').text(item[0])
//var item1 = $('<di>').text(item[1])
//
//
//$('#stackList').append(item1);
//$('#stackList').append(item2);
//
//
//
//$('#add').on('click',function(){
//    
//    var value = $('#stack').val()
//    
//    item.push(value);
//    
//    var tag = $('<div>').text(value); 
//    
//    var stack = $('#stackList').val()
//    
//    
//})