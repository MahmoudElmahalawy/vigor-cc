import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	let location = useLocation();

	return (
		<nav>
			<Link to="/tasks">
				<div className="logo">Tasks App</div>
			</Link>
			<ul>
				<li>
					<Link to="/add" className={location.pathname === "/add" ? "active" : ""}>
						Add Task
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
