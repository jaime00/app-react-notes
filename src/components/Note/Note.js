import React, { Component } from "react";
import "./Note.css";

export default class Note extends Component {
    render() {
        return (
            <div className="note">
                <span>&times;</span>
                <p>{this.props.content}</p>
            </div>
        );
    }
}
