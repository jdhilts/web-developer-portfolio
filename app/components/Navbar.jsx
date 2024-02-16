import { Link } from '@remix-run/react';

export default function NavBar(){

	return(
		<>
		<navbar>
		<ul>
		<li>
		<Link to="#about">About</Link><
		/li>
		<li>
		<Link to="#projects">Projects</Link>
		</li>
		<li>
		<Link to="#contact">Contact</Link>
		</li>
		</ul>
		</navbar>
		</>
		);
}