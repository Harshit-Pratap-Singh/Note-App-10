import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
	return (
		<li className="note note-list__item">
			<div class="note__content">
				<h3 class="note__title">
					{props.title}
				</h3>
				<div class="note__description">
					<p>
						{props.content}
					</p>
				</div>
			</div>
			<div class="note__button-list">
				<button class="note__button button button--small button--delete" onClick={() => props.deleteNote(props.id)}>
					<DeleteIcon />
				</button>
			</div>
		</li>
	);
}

export default Note;
