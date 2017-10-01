import React from 'react'; // react 쓸수 있는 환경 만들어줌
import ReactDOM from 'react-dom'; // jsx 사용하면 html 만들수 있게 

//import App from './App'; //. ; 나 
import Web from './Wep'; 
ReactDOM.render(<Web />,document.getElementById('root'));
                
                
                
//map, filter

                
                //1. map 
                
//var a = [10,20,30, 40];
//var nArr = []; 
//                
//for (var i = 0; i < a.length; i++){
//    
//    nArr.push(a[i]*2); 
//    
//}             
//
//console.log(nArr);
//console.log(a);
                

                
// 매개변수 function의 첫번째 매개변수 : 해당값 두번째 매ㅐ변수 : 순서  
//[10,20,30,40].map(function(v,i){
//var nArr = a.map(function(v,i){
//    
//    console.log(v);
//    console.log(i);
//    
//    return v * 2; 
//    
//}); // nArr는 자연스럽게 배열됨
                
                
//es6문법 
//const nArr = a.map((v,i)=> v * 2) // return밖에 없을 땐 return 안써도 된다 

                
                
                //2. filter
                
//var a = [10,20,30, 40];
                
//var nArr = a.filter(function(v,i){
//    
//    return v > 20; // test 조건을 반환한다.  
//    
//}); 
                
                
//const nArr = a.filter((v,i)=>v>20);
//                
//console.log(nArr); 
//console.log(a); // a가 새로운 것으로 바뀌는게 아니다. 
//





