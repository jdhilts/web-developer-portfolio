import { Link } from '@remix-run/react';

export default function Contact(){
	return(
		<>
		<section id="contact">
		<div id="contact-header">
		<h1>Lets Work Together...</h1>
		<p>How do you like your coffee?</p>
		</div>

		<div id="icons-section">
		<Link to="http://www.linkedin.com/in/james-hilts-b348a23b">
		<div className="icons">
		<img src="/images/LinkedIn.png" alt="LinkedIn Icon "/>
		<p><br/>LinkedIn</p>
		<p className="attribution">LinkIn Icon by</p> <a className="link_pro" href="https://freeicons.io/essential-web-1/linkedin-social-media-logo-website-icon-40217">BECRIS on</a>
		
		<a className="attribution" href="https://freeicons.io">freeicons.io</a>
		</div>
		</Link>

		
		<Link to="tel:5102824086">
		<div className="icons">
		<img src="/images/CallMe.png" alt="Call" />
		<p><br/>Call</p>
		</div>
		</Link>

		<Link to="mailto:jameshilts@icloud.com">
		<div className="icons">
		<img src="/images/EmailMe.png" alt="Email" />
		<p><br/>Email</p>
		</div>
		</Link>

		{/*<Link href="">
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
		</Link>*/}

		</div>
		</section>
		</>
		);
}