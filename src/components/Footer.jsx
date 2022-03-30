import React from "react";

function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer class="page-footer page__inner">
			<div class="page__container">
				<div class="page-footer__copyright">
					<p>
						Copyright ⓒ {year}
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
