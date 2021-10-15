import React from "react";
import CreateIcon from "@mui/icons-material/Create";

function Header() {
	return (
		<header class="page-header">
			<h1 class="page-header__title">
				<CreateIcon class="page-header__logo" />
				Notes
			</h1>
		</header>
	);
}

export default Header;
