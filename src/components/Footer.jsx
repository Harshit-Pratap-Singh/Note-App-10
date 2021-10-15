import React from "react";

function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer class="page-footer">
			<div class="page-footer__copyright">
				<p>
					Copyright ⓒ {year}
				</p>
			</div>
		</footer>
	);
}

export default Footer;
