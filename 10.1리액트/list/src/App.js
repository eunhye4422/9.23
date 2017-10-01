import React, { Component } from 'react'; 

class App extends Component {
    
    constructor(){
        super();
        
        this.state = {
            list : [
                {id : 1, stack : 'HTML', type : 'FE'},
                {id : 2, stack : 'PHP', type : 'BE'},
                {id : 3, stack : 'PYTHON', type : 'BE'},
                {id : 4, stack : 'CSS', type : 'FE'},
                {id : 5, stack : 'JAVA', type : 'BE'},
                {id : 6, stack : 'JAVASCRIPT', type : 'FE'},
                {id : 7, stack : 'REACT', type : 'FE'},
                {id : 8, stack : 'NODE', type : 'ALL'},
            ],
            filter : []
        }
    
        
        //직접적으로 건들면 안됨. 
    }
     
    
    //같다고 할 때 = 세개 
    handleClick(type){
        
        const aa = this.state.list.filter((value)=>type===value.type); 
        this.setState({filter : aa}); // 렌더링이 다시 된다! 
        
    } 
    
    
    render(){
        
        
        const content = this.state.filter.map((value)=><h2 key={value.id}>{value.stack}</h2>)
        
        return (
            <div>
                <ul>
                    <li onClick={this.handleClick.bind(this,'FE')}>
                        frontEnd Stack</li>
                    <li onClick={this.handleClick.bind(this,'BE')}>
                        backEnd Stack</li>
                    <li onClick={this.handleClick.bind(this,'ALL')}>
                        full Stack</li>
                
                </ul>
                
                <div>
                    {content}
                
                </div>
                
                
            </div>
            )
        
    }
}


export default App; 