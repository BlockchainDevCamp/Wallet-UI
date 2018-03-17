import React, { Component } from 'react';
import Input from "../common/Input";

export default class BalancePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: "",
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
                <h1>View Account Balance</h1>
                <Input
                    name="address"
                    value={this.state.address}
                    onChange={this.onChangeHandler}
                    label="address"
                    type="text" />
                <Input
                    name="node"
                    value={this.state.node}
                    onChange={this.onChangeHandler}
                    label="node"
                    type="text" />
                <button>Display Balance</button> <br />
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        );
    }
}