import React from "react";

const Note = (props) => {
  const updateTitle = (e) => {
    const id = props.note.id;
    const updateValue = e.target.value;
    props.onType(id, "title", updateValue);
  };

  const updateDescription = (e) => {
    const id = props.note.id;
    const updateValue = e.target.value;
    props.onType(id, "description", updateValue);
  };

  const deleteNote = () => props.onDelete(props.note.id);

  return (
    <li className="note">
      <input
        value={props.note.title}
        className="note__title"
        type="text"
        placeholder="Title"
        onChange={updateTitle}
      />
      <textarea
        value={props.note.description}
        className="note__description"
        placeholder="Description..."
        onChange={updateDescription}
      />
      <span onClick={deleteNote} className="note__delete">
        X
      </span>
    </li>
  );
};

export default Note;
