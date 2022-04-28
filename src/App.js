import React, { Component } from "react";
import Header from "./Header";
import NoteList from "./NoteList";
import { notes } from "./data";

class App extends Component {
  state = { notes, title: "", description: "" };

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
    console.log(`clicked ${this.state.title}`);
    console.log(`clicked ${this.state.description}`);
    const updateNotes = {
      id: Date.now(),
      title: this.state.title,
      description: this.state.description,
      doesMatchSearch: true
    };
    this.setState({ notes: [updateNotes, ...this.state.notes] });
  };

  onType = (id, property, updatedValue) => {
    const updatedNotes = this.state.notes.map((note) => {
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
    this.setState({ notes: updatedNotes });
  };

  onSearch = (searchText) => {
    const searchNotes = this.state.notes.map((note) => {
      if (
        note.title.includes(searchText) ||
        note.description.includes(searchText)
      )
        note.doesMatchSearch = true;
      else note.doesMatchSearch = false;
      return note;
    });
    this.setState({ notes: searchNotes });
  };

  onDelete = (index) => {
    const updatedNotes = this.state.notes.filter((note) => {
      if (note.id !== index) return note;
    });
    this.setState({ notes: updatedNotes });
  };

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
          notes={this.state.notes}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
