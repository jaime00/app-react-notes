import React, { Component } from "react";
import "./Note.css";

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.content = this.props.note.content;
    }

    handleRemoveNote = () => {
        let res = window.confirm("¿Está seguro de eliminarlo?");
        if (res) this.props.removeNote(this.props.note.id);
    };

    render() {
        return (
            <div className="note">
                <span onClick={() => this.handleRemoveNote()}>&times;</span>
                <p>{this.content}</p>
            </div>
        );
    }
}
