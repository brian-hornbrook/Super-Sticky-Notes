import React, { Component } from "react";
import Header from "./Header";
import NoteList from "./NoteList";
import { Notes } from "./data";

class App extends Component {
  state = { Notes, title: "", description: "" };

  handleNewTitle = (event) => {
    const updateState = this.state;
    updateState.title = event.target.value;
    this.setState({ updateState });
  };

  handleNewDescription = (event) => {
    const updateState = this.state;
    updateState.description = event.target.value;
    this.setState({ updateState });
  };

  addNote = (event) => {
    event.preventDefault();
    const updateNotes = {
      id: Date.now(),
      title: this.state.title,
      description: this.state.description,
      doesMatchSearch: true
    };
    this.setState({ Notes: [updateNotes, ...this.state.Notes] });
    // console.log( `Notes = ${this.state.Notes}`);
  };

  onType = (id, property, updatedValue) => {
    const updatedNotes = this.state.Notes.map((note) => {
      if (note.id !== id) {
        return note;
      } else {
        if (property === "title") {
          note.title = updatedValue;
          return note;
        } else {
          if (property === "description") {
            note.description = updatedValue;
            return note;
          }
        }
      }
    });
    this.setState({ Notes: updatedNotes });
  };

  onSearch = (searchText) => {
    const searchNotes = this.state.Notes.map((note) => {
      if (
        note.title.includes(searchText) ||
        note.description.includes(searchText)
      )
        note.doesMatchSearch = true;
      else note.doesMatchSearch = false;
      return note;
    });
    this.setState({ Notes: searchNotes });
  };

  onDelete = (index) => {
    const updatedNotes = this.state.Notes.filter((note) => {
      if (note.id !== index) return note;
    });
    this.setState({ Notes: updatedNotes });
  };

  componentDidUpdate() {
    const stateString = JSON.stringify(this.state.Notes);
    localStorage.setItem("notes", stateString);
  }

  componentDidMount() {
    const stateNotes = localStorage.getItem("notes");
    if (stateNotes) {
      const savedNotes = JSON.parse(stateNotes)
      this.setState({ Notes: savedNotes });

    }
  }

  render() {
    return (
      <div>
        <Header
          onSearch={this.onSearch}
          addNote={this.addNote}
          searchText={this.state.searchText}
          handleNewTitle={this.handleNewTitle}
          handleNewDescription={this.handleNewDescription}
        />
        <NoteList
          onType={this.onType}
          Notes={this.state.Notes}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;