import React, {Component} from 'react'; 
//import React from 'react'; 

class App extends Component {
    
    
    //라이프 사이클 
    /*
    
    리액트 문법을 통해서 화면에 그려지기 까지의 동작 순서를 가지고 있는 함수 
    리액트에서 다시 랜더링이 될 때 동작되는 함수 
    
    
    */
    
    constructor(){
        super(); 
    }
    
    componentWillmount(){
        //컴포넌트를 통해서 HTML이 만들어지기 전에 실행된다. 
        let a= documnet.getElementsByTagName9('h1');
        console.log(a)
    }
    
    componentDidMount(){
        //첫 렌더링이 끝나고 실행됨. 
        let a= documnet.getElementsByTagName9('h1');
        console.log(a)
    }
    
    
    componentWillReceiveProps(){
        //컴포넌트가 props를 새로 받았을 때 실행되는 부분 props ; 상위 컴포넌트로부터 뭘 받은거 
        // this.setState() 를 쓰지 않는다. 
        // this.setState() : 무한루프에 빠질 수 있다. 
    }
    
    
    shouldComponentUpdate(){
        // 다시 렌더링을 할지에 대해 선택하는 부분 
    }
    
    componentWillUpdate(){
        //컴포넌트가 업테이트 되기 전에 실행 
        // this.setState() 를 결코 사용하면 안된다. 무한루프에 빠짐 
    }
    
    
    componentDidUpdate(){
        //컴포넌트가 업테이트 된 후에 실행 
    }
    
    
    componentWillUnmount(){
        //DOM(컴포넌트)이 사라지고 실행됨.  
    }
    
    
    render(){
        return (
            <h1>Application</h1>
        
        )
        
    }
}


export default App; // 내보내기. 