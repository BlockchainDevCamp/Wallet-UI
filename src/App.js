import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/HomePage/HomePage';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);