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

  const filterNotes = props.notes.filter((note) => {
    return note.doesMatchSearch;
  });

  const notes = filterNotes.map(renderNotes);

  return <ul className="notes-list">{notes}</ul>;
};

export default NoteList;
