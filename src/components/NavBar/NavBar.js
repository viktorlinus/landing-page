import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
	        <div className="sticky">
	        	<nav className="">
		        	<ul>
		         	 <Link className="Link" to="/"><strong>EKEN</strong></Link>
		         	 <Link className="Link" to="/projects">Projects</Link>
		      		</ul>
	      		</nav>
	      	</div>
	);
}


export default NavBar;