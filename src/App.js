import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/common/Header';
import HomePage from './components/HomePage/HomePage';
import BalancePage from "./components/BalancePage/BalancePage";
import WalletCreatePage from "./components/Wallet/WalletCreatePage";
import WalletOpenPage from "./components/Wallet/WalletOpenPage";
import SendTransactionPage from "./components/SendTransactionPage/SendTransactionPage";

class App extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/wallet/create" component={WalletCreatePage} />
                    <Route exact path="/wallet/open" component={WalletOpenPage} />
                    <Route exact path="/balance" component={BalancePage} />
                    <Route exact path="/send-transaction" component={SendTransactionPage} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);