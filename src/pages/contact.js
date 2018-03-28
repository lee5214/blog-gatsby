import React from 'react';
const Contact = () => {
	return(
		<div>
			<div>
				Email: cong-li@cong-li.com
				Github Icon
				Linkedin Icon
			</div>
			{/*<form name="contact" method="POST" data-netlify='true'>*/}
				{/*<p style={{visibility:'hidden'}}>
					<label>Don’t fill this out if you're human: <input name="bot-field" /></label>
				</p>
				<p>
					<label>Your Name: <input type="text" name="name" /></label>
				</p>
				<p>
					<label>Your Email: <input type="email" name="email" /></label>
				</p>
				<p>
					<label>Message: <textarea name="message"></textarea></label>
				</p>*/}


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
		</div>
	)
}
export default Contact
