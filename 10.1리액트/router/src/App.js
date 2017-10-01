import React, {Component} from 'react'; 
import Header from './components/Header';

import Home from './route/Home';
import About from './route/About';
import Post from './route/Post';

//라우터 환경 구성. 쓰고싶은 곳을 감싸면 된다. 
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    render(){
        return (
            <Router>
                <div>
                    <Header/>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about/:name/:bb" component={About} />
                        <Route path="/post" component={Post} />
                    </div>
                </div>
                
            </Router>
        )
    }
}


export default App; 