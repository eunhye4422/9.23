import React, {Component} from 'react'; 

import {Link} from 'react-router-dom'; 



//<Link to='/post'><button>포스트로이동</button></Link>
//es5사용 x 
//this.props ; 라우트 콤포넌트 
/*

react router는 기본적으로 3가지의 정보를 준다. 
1. 히스토리 (어떤 순서로 라우트를 이동했느냐 에 대한 정보 계속누적)
2. match : path상의 정보를 확인할 수 있다. 
3. location ; 현재위치에 대해 설명할수 있다. 

*/

class Home extends Component {
    render(){
        return (
            <div>
                Home
                <button onClick={()=>{
                        this.props.history.push('/post');}}>
                    포스트로이동</button>
            
            </div>
        )
    }
}


export default Home; 