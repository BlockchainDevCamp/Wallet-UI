import React, { Component } from 'react';

export default class WalletCreatePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1>Create a new Wallet</h1>
                <p>Generate new wallet: random private key -> public key -> address.</p>
                <button>Generate Now</button><br />
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        );
    }
}