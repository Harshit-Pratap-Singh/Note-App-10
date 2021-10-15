import React from "react";
import CreateIcon from "@mui/icons-material/Create";

function Header() {
	return (
		<header class="page-header sticky__header page__inner">
			<div class="page__container">
				<h1 class="page-header__title">
					<span class="page-header__brand-logo">
						<CreateIcon />
					</span>
					<span class="page-header__brand-name">
						Notes
					</span>
				</h1>
			</div>
		</header>
	);
}

export default Header;
