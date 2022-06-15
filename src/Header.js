import React from "react";

const Header = (props) => {
  const searchNotes = (e) => {
    const searchText = e.target.value;
    props.onSearch(searchText);
  };

  return (
    <div>
      <header>
        <h1 className="app-header__title">Super Sticky Notes</h1>
        <aside className="app-header__search">
          <h2 className="search-text">Search Notes</h2>
          <input
            className="search"
            type="text"
            placeholder="Type here to search..."
            value={props.searchText}
            onChange={searchNotes}
          />
        </aside>
        <form className="app-header__controls" onSubmit={props.addNote}>
          <input
            className="controls"
            type="text"
            placeholder="add new title"
            name="title"
            // value="test"
            onChange={props.handleNewTitle}
          />
          <input
            className="controls"
            type="text"
            placeholder="add new description"
            onChange={props.handleNewDescription}
          />
          <button
            onClick={props.addNote}
            className="add-new controls"
            type="submit"
          >
            + New Note
          </button>
        </form>
      </header>
    </div>
  );
};
export default Header;
