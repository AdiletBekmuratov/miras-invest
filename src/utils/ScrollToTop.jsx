import React, { useEffect } from "react";
import { useLocation, withRouter } from "react-router";

function ScrollToTop(props) {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'instant'
		});
	}, [pathname]);
	return props.children
}
export default ScrollToTop = withRouter(ScrollToTop)