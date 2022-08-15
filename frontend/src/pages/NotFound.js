import { useEffect } from "react";

const NotFound = () => {
	useEffect(() => {
		document.title = "404";
	}, []);

	return (
		<div className="not-found-page">
			<h2 className="page-title">404 - Page not found!</h2>
			<p>Sorry, that page doesn't exist.</p>
		</div>
	);
};

export default NotFound;
