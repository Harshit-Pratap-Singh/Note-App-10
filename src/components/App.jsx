import React, { useState } from "react";
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const theme = createTheme();
  const [notes, updateNotes] = useState([]);

  function addNote(title, content) {
    if(!title.trim() && !content.trim()) {
      return;
  }

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
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <div>
          <Header />
          <CreateArea addNote={addNote} />
          {notes.map(Disp)}
          <Footer />
        </div>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
