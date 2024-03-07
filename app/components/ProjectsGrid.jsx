import { Link } from '@remix-run/react';

export default function ProjectsGrid() {
	return(
		<div className="flex-container">
		<h1>Here are some of my projects</h1>
		<Link to="https://seahorse-app-a6kdz.ondigitalocean.app/">
		<div className="card">
		<img  id="project-img" src="images/penguin.png" alt="Penguin Waving Scene"/>
		<p id="project-desciption">Pengiun Waving</p>
		</div>
		</Link>
		<a href="">
		<div className="card">
		<img id="project-img" src="images/jhilts-landing-page.jpg" alt="Landing Page For J Hilts"/>
		<p id="project-desciption">Landing Page</p>
		</div>
		</a>
		<a href="">
		<div className="card">
		<img id="project-img" src="images/technical-document.jpg" alt="Technical Document"/>
		<p id="project-desciption">Technical Document</p>
		</div>
		</a>
		</div>
		);
}