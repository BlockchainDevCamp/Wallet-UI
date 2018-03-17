import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        const { loggedIn, onLogout } = this.props;

        return (
            <header>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink exact to="/wallet/create" activeClassName="active">Create New Wallet</NavLink>
                <NavLink exact to="/wallet/open" activeClassName="active">Open Existing Wallet</NavLink>
                <NavLink exact to="/balance" activeClassName="active">Account Balance</NavLink>
                <NavLink exact to="/send-transaction" activeClassName="active">Send Transaction</NavLink>
            </header>
        );
    }
}