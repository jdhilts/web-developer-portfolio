

export default function ProjectsGrid() {
	return(
		<div className="flex-container">
		<a href="">
		<div className="card">
		<img  id="project-img" src="images/penguin.png" alt="Penguin Waving Scene"/>
		<p id="project-desciption">Pengiun waving animation</p>
		</div>
		</a>
		<a href="">
		<div className="card">
		<img id="project-img" src="images/jhilts-landing-page.jpg" alt="Landing Page For J Hilts"/>
		<p id="project-desciption">Landing page for J Hilts</p>
		</div>
		</a>
		<a href="">
		<div className="card">
		<img id="project-img" src="images/technical-document.jpg" alt="Technical Document"/>
		<p id="project-desciption">Technical Document for CSS Layout</p>
		</div>
		</a>
		</div>
		);
}