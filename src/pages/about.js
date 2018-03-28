import React from 'react';
import MessageWall from '../components/Wall/MessageWall';

const About = () => {
	return (
		<div>
			<MessageWall/>
			<form
				name="contact-form"
				method="post"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
			>
				<input name="name" placeholder="Your Name" type="text"/>
				<input name="email" placeholder="name@name.com" type="email"/>
				<textarea name="message"/>
				<button>Send</button>
			</form>
		</div>
	);
};
export default About;
