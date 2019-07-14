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
                content: "note 1"
            },
            {
                id: 1,
                content: "note 2"
            }
        ]
    };

    addNote = content => {
        let newNote = {
            id: [this.state.notes.length],
            content: content
        };

        this.setState({
            notes: [...this.state.notes, newNote]
        });
    };

    removeNote = id => {
        // console.log(id);
        const newNotes = this.state.notes.filter(note => note.id !== id);
        this.setState({
            notes: newNotes
        });
    };

    render() {
        // console.log(this.state);
        return (
            <div>
                <div className="header">
                    <h1>Creating Notes with React</h1>
                </div>
                <div className="body">
                    {this.state.notes.map(note => (
                        <Note
                            removeNote={this.removeNote}
                            note={note}
                            key={note.id}
                        />
                    ))}
                </div>
                <div className="footer">
                    <Form addNote={this.addNote} />
                </div>
            </div>
        );
    }
}
