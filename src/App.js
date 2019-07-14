import React from "react";
import "./App.css";

// components
import Note from "./components/Note/Note";
import Form from "./components/Form/Form";

// firebase
import firebase from "firebase";

//configuration of BDD
import { DB_CONFIG } from "./config/config";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            notes: [
                // { id: 0, content: "note 1" },
                // { id: 1, content: "note 2" }
            ]
        };

        // we requiere the conecction to Firebase
        this.app = firebase.initializeApp(DB_CONFIG);
        this.db = this.app
            .database()
            .ref()
            .child("notes");
    }

    componentDidMount() {
        let { notes } = this.state;

        this.db.on("child_added", snap => {
            notes.push({
                id: snap.key,
                content: snap.val().content
            });
            this.setState({ notes });
        });

        this.db.on("child_removed", snap => {
            notes.map((note, i) => {
                if (note.id === snap.key) notes.splice(i, 1);
            });
            this.setState({ notes });
        });
    }

    addNote = content => {
        // let newNote = {
        //     id: [this.state.notes.length],
        //     content: content
        // };

        // this.setState({
        //     notes: [...this.state.notes, newNote]
        // });

        this.db.push().set({ content });
    };

    removeNote = id => {
        // console.log(id);

        // const newNotes = this.state.notes.filter(note => note.id !== id);
        // this.setState({
        //     notes: newNotes
        // });

        this.db.child(id).remove();
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
