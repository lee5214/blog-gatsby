import React from 'react';

const Contact = () => {
	return(
		<div>
			<div>
				Email: cong-li@cong-li.com
				Github Icon
				Linkedin Icon
			</div>
			<form name="contact" method="POST" data-netlify='true' data-netlify-honeypot='bot-field'>
				<p>
					<label>Your Name: <input type="text" name="name" /></label>
				</p>
				<p>
					<label>Your Email: <input type="email" name="email" /></label>
				</p>
				<p>
					<label>Message: <textarea name="message"></textarea></label>
				</p>
				<div netlify-recaptcha></div>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
		</div>
	)
}
export default Contact
