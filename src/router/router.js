import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '../components/Home/Home'
import App from '../App'

class AAA extends React.Component {
    render() {
        return (
            <Router >
                <div className="father">
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={App} />
                    <Route path="/home" component={Home} />
                </div>
            </Router>
        )
    }
}
export default AAA;