import React, { Component } from "react";
import "./Note.css";

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.content = this.props.note.content;
    }

    render() {
        return (
            <div className="note">
                <span onClick={() => this.props.removeNote(this.props.note.id)}>
                    &times;
                </span>
                <p>{this.content}</p>
            </div>
        );
    }
}
