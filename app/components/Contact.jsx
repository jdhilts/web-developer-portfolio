import { Link } from '@remix-run/react';

export default function Contact(){
	return(
		<>
		<section id="contact">
		<div id="contact-header">
		<h1>Lets Work Together...</h1>
		<p>How do you like your coffee?</p>
		</div>

		<Link href="">
		<div id="linked-in">
		<img src="/images/linkedin.png" alt="LinkedIn Icon "/>
		<p><br/>LinkedIn</p>
		</div>
		</Link>

		<div id="icons-section">
		<Link href="">
		<div id="icons">
		<img src="/images/call.png" alt="Call" />
		<p><br/>Call</p>
		</div>
		</Link>

		<a href="mailto:jameshilts@icloud.com">
		<div id="icons">
		<img src="/images/email.png" alt="Email" />
		<p><br/>Email</p>
		</div>
		</a>

		<Link href="">
		<div id="icons">
		<img src="/images/twitter.png" alt="X" />
		<p><br/>x.com</p>
		</div>
		</Link>

		<Link href="">
		<div id="icons">
		<img src="/images/meta.png" alt="Meta" />
		<p><br/>Meta</p>
		</div>
		</Link>
		</div>
		</section>
		</>
		);
}