import React, {Component} from 'react'; 

import { NavLink } from 'react-router-dom'; 

class Header extends Component {
    render(){
        return (
            <div className = "header">
                <h1>my blog</h1>
                <div className="menu">
                    <NavLink exact to="/" 
                        activeClassName="active">홈</NavLink> 
                    <NavLink to="/about/dmsgP" 
                        activeClassName="active">소개</NavLink> 
                    <NavLink to="/post" 
                        activeClassName="active">포스트</NavLink> 

                </div>
            </div>
        )
    }
}


export default Header; 