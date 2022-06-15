import React from "react";
import Note from "./Note";

const NoteList = (props) => {
  const renderNotes = (note) => (
    <Note
      addNote={props.addNote}
      onDelete={props.onDelete}
      onType={props.onType}
      note={note}
      key={note.id}
    />
  );

<<<<<<< HEAD
  const filterNotes = props.notes.filter((note) => {
=======
  const filterNotes = props.Notes.filter((note) => {
>>>>>>> main
    return note.doesMatchSearch;
  });

  const notes = filterNotes.map(renderNotes);

  return <ul className="notes-list">{notes}</ul>;
};

export default NoteList;
