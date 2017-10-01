import React, {Component} from 'react'; 

class About extends Component {
    render(){
        return (
            <div>어바웃{this.props.match.params.name}
            {this.props.match.params.bb}
            </div>
        )
    }
}


export default About; 