import React, { Component } from 'react';
import Input from "../common/Input";

export default class SendTransactionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sender: "",
            recipient: "",
            value: 0,
            node: ""
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div className="container">
                <h1>Send Transaction</h1>
                <Input
                    name="sender"
                    value={this.state.sender}
                    onChange={this.onChangeHandler}
                    label="sender"
                    type="text" />
                <Input
                    name="recipient"
                    value={this.state.recipient}
                    onChange={this.onChangeHandler}
                    label="recipient"
                    type="text" />
                <Input
                    name="value"
                    value={this.state.value}
                    onChange={this.onChangeHandler}
                    label="value"
                    type="number" />
                <button>Sing Transaction</button> <br />
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <Input
                    name="node"
                    value={this.state.node}
                    onChange={this.onChangeHandler}
                    label="node"
                    type="text" />
                <button>Send Transaction</button> <br />
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        );
    }
}