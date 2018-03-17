import React, { Component } from 'react';
import Input from "../common/Input";

export default class WalletOpenPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            privateKey: ""
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <h1>Open an Existing Wallet</h1>
                <p>Enter your wallet private key (compressed ESDSA key, 65 hex digirs).</p>
                <input
                    onChange={this.onChangeHandler}
                    name="privateKey"
                    id="privateKey"
                    type="text"
                    value={this.state.privateKey} />

                <button>Open Wallet</button> <br />

                <textarea name="" id="" cols="30" rows="10"></textarea>

            </div>
        );
    }
}