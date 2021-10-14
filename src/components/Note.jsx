import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1 class="note__title">{props.title}</h1>
      <p class="note__description">{props.content}</p>
      <button class="note__button" onClick={() => props.deleteNote(props.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
