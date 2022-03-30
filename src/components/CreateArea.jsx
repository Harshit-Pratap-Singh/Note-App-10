import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {
	const [title, updateTitle] = useState("");
	const [content, updateContent] = useState("");
	const [isClicked, toggle] = useState(false);

	function changeContent(event) {
		var temp = event.target.value;
		updateContent(temp);
		// console.log(temp);
	}
	function changeTitle(event) {
		var temp = event.target.value;
		updateTitle(temp);
		// console.log(temp);
	}

	function zoomIn() {
		toggle(true);
	}
	return (
		<div>
			<form className="create-note">
				{
					isClicked && <input
						onChange={changeTitle}
						class="create-note__title create-note__field"
						name="title"
						placeholder="Title"
						value={title}
					/>
				}

				<textarea
					class="create-note__description create-note__field"
					onChange={changeContent}
					onClick={zoomIn}
					value={content}
					name="content"
					placeholder="Take a note..."
					rows={isClicked ? '3' : '1'}
				/>
				<Zoom in={isClicked}>
					<Fab
						class="create-note__button button button--success"
						onClick={(event) => {
							props.addNote(title, content);
							updateContent("");
							updateTitle("");
							event.preventDefault();
						}}
					>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
