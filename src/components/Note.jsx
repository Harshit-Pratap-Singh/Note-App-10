import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.deleteNote(props.id)}>
        <DeleteIcon />
      </button>
      <div className="color-picker" >
          <input type="radio" name="color-pick" value="#F06292" id="color1" />
          <label htmlFor="color1" style={{backgroundColor: "#F06292"}}></label>
          <input type="radio" name="color-pick" value="#BA68C8" id="color2" />
          <label htmlFor="color2" style={{backgroundColor: "#BA68C8"}}></label>
          <input type="radio" name="color-pick" value="#FFD54F" id="color3" />
          <label htmlFor="color3" style={{backgroundColor: "#FFD54F"}}></label>
          <input type="radio" name="color-pick" value="#4FC3F7" id="color4" />
          <label htmlFor="color4" style={{backgroundColor: "#4FC3F7"}}></label>
          <input type="radio" name="color-pick" value="#AED581" id="color5" />
          <label htmlFor="color5" style={{backgroundColor: "#AED581"}}></label>
      </div>
    </div>
  );
}

export default Note;
