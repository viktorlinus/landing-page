import './BlogPost.css';
import robofriends from './robofriends.jpg';
import { Link, Outlet } from "react-router-dom";


const BlogPost = ({ name, date, id, title, content }) => {
	return (
		<div className="blogpost">
			<h2 className="title">{title}</h2>
			<div className="">
				<img src={robofriends} alt="#!"/>
				<h4 style={{textAlign:"left", marginLeft:"25px"}}>{date}</h4>
				<p className="textSvart">{content} </p>
				<Link className="Link" to={`/projects/${id}`}>Click To Read</Link>
			</div>
			<Outlet />
		</div>
	);
}

export default BlogPost;