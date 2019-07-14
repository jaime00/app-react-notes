import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
    onSubmitForm = e => {
        e.preventDefault();
        this.props.addNote(this.inputText.value);
        this.inputText.value = "";
        this.inputText.focus();
    };

    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <input
                    type="text"
                    placeholder="Write a note"
                    ref={input => (this.inputText = input)}
                />
                <input type="submit" value="Add Note" className="button" />
            </form>
        );
    }
}
