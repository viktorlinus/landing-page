import './BlogPost.css';
import robofriends from './robofriends.jpg'

const BlogPost = () => {
	return (
		<div className="blogpost">
			<h2 className="title">Title of Card</h2>
			<div className="">
				<img src={robofriends} alt="#!"/>
				<p className="textSvart">text med max 100 ord eller liknande här. Meeeeer text häääär hhahaha hallå hej </p>
				<a className="länk" href='#!'>Länk till inlägget</a>
			</div>
		</div>
	);
}

export default BlogPost;