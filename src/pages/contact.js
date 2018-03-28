import React from 'react';
import { TextField } from 'material-ui';

const Contact = () => {
	return (
		<div>
			<h1>Hi people</h1>
			<p>Welcome to your new Gatsby site.</p>
			<p>Now go build something great.</p>
			<form
				name="contact-form"
				method="post"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
			>
				<input name="name" placeholder="Your Name" type="text" />
				<input name="email" placeholder="name@name.com" type="email" />
				<textarea name="message" />
				<button>Send</button>
			</form>
		</div>
	);
};
export default Contact;
