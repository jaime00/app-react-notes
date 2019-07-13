import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
    onSubmitForm = e =>{
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <input type="text" placeholder="Write a note" />
                <input type="submit" value="Add Note" className="button"/>
            </form>
        );
    }
}
