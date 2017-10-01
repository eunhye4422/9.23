//노드에서는 es6 사용해도 된다. 한번 transform 해준다. 

const express = require('express');
const app = express();
const engine = require('ejs');


// ejs 셋팅
app.set('views',__dirname+'/views'); //__dirname : 기본폴더. app 
app.set('view engine','ejs');
app.use(express.static('public')); // css, .. 등 : static file 정적파일. 이미 기재되어있는 파일. 사용할거다. static파일을. public이라는 폴더 안에서 


app.listen(3000,function(){
    console.log('Server is Good'); // 잘 연결된지 확인 ~ 
}); 


/*라우트 route , url : 갈랫길 */
//naver.com/
//naver.com/blog
//naver.com/blog/rhdmsgp1996













// get(조회) , post(입력), put(수정), delete(삭제)
app.get('/blog',function(req,res){// 슬러시 앞에는 기본적localhost 
//    res.send('<a href="/">메인페이지로 이동</a>');
    res.render('blog',{ title : 'eunhye blog' });
}); 
// 객체 : 데이터

//: (콜론) : 정해지지 않은것 
app.get('/blog/:id',function(req,res){
   var blog_id = req.params.id; // 위의 매개변수 /blog/:id
    res.send(blog_id);
    
});


app.get('/',function(req,res){
//    res.send('<a href="/blog">블로그페이지이동</a>');
    res.render('index',{ title : 'eunhye main' });
});








// 수정사항 서버 중지시키고 새로고침해야 수정사항 적용된다 

// 서버 안죽여도 수정사항 적용시키기 
// npm install supervisor -g 
//* g : global



//superviser server.js








