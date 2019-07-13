import React from "react";
import "./App.css";

// components
import Note from "./components/Note/Note";
import Form from "./components/Form/Form";

export default class App extends React.Component {
    state = {
        notes: [
            {
                id: 0,
                content: "Note 1"
            },
            {
                id: 1,
                content: "Note 2"
            },
            {
                id: 2,
                content: "Note 3"
            }
        ]
    };

    render() {
        return (
            <div>
                <div className="header">
                    <h1>Creating Notes with React</h1>
                </div>
                <div className="body">
                    {this.state.notes.map(note => (
                        <Note content={note.content} key={note.id} />
                    ))}
                </div>
                <div className="footer">
                    <Form />
                </div>
            </div>
        );
    }
}
