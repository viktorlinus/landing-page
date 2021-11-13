import './Introduction.css';
import jagglad from '../../jagglad.jpg';

const Introduction = () => {
	return (
	    <div className="introduction container-main">
	    	<div className="bildruta">
	    		<img className="bild" src={jagglad} alt="pic" />
	    	</div>
	    	<div className="textruta">
	    		<h4>Who am I?</h4>
	    		<p className="text-muted">I AM A CHAMPION! Haha, just kidding. But seriously though, you can learn everything you want with a little bit of interest. 
	    		Hard work pays of and I will prove it to you by building this website based on what I learn the coming weeks/months. 
	    		I stared learning web development 27/9-2021. Let's see what I will be able to do by the end of the year! Exciting! :)</p>
	    		<p>What is this site?</p>
	    		<p className="text-muted">In reality, for now, I have no idea what can be expected of this page. But I'm sure it will happen a lot.</p>
	    	</div>
	    </div>
	);
}


export default Introduction;