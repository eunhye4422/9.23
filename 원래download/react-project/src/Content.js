import React, {Component} from 'react';

class Content extends Component {
    
    constructor(){
        
        super(); 
        
        this._ss = this._stackAdd.bind(this); 
        this.ch = this.handleChange.bind(this);
        
        //컴포넌트 내부에서 사용되는 데이터 
        this.state={
            stack : ['HTML', 'CSS'],
            tech : ''
        }
    }
    
    handleChange(e){
        console.log(e.target.value)
        
        this.setState({tech : e.target.value}); 
    }
    
    
    _stackAdd(){
        alert('a');
        const complete = this.state.stack.concat([this.state.tech])
        this.setState({stack : complete, tech; ''})
    }
    
    render(){
        
        
        // key 필수! 
        const stack =  this.state.stack.map((v,i)=><div key={i}>{v}</div>);
        return (
        
            <div>
                <h2>{this.props.title}</h2>
                <input type='text' value = {this.state.tech};onChange={this.ch)}/>
                <button onClick= {this._ss}>add</button>
                {stack}
            </div>
            
        )
    }
}


export default Content; 