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

				
				<input name="name" type="text"/>
				<p>
					<button>Send</button>
				</p>
			</form>
		</div>
	)
}
export default Contact
