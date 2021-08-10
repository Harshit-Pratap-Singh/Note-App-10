import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, updateNotes] = useState([]);

  function addNote(title, content) {
    updateNotes((preValue) => {
      return [...preValue, { title, content }];
    });
  }

  function deleteNote(id) {
    updateNotes((preValue) => {
      return preValue.filter((val, index) => {
        return id !== index;
      });
    });
  }
  function Disp(note, index) {
    return (
      <Note
        deleteNote={deleteNote}
        key={index}
        id={index}
        title={note.title}
        content={note.content}
      />
    );
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map(Disp)}
      <Footer />
    </div>
  );
}

export default App;
