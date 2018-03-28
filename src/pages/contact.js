import React from 'react';
import { TextField } from 'material-ui';

const Contact = () => {
	return (
		<div style={{display:'flex',justifyContent:'center'}}>
			<form
				name="contact"
				method="post"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
			>
					<TextField
						id="with-placeholder"
						name={'name'}
						label='Name'
						placeholder="John Snow"
						type="text"
						required
						inputProps={{

						}}
					/>
				{/*<div>
					<TextField
						id="with-placeholder"
						name={'email'}
						label='Email'
						placeholder="xxxx@xxxx.com"
						type="text"
						required
					/>
				</div>
				<div>
					<TextField
						id="multiline-static"
						name={'message'}
						label="Multiline"
						multiline
						rows="4"
						margin="normal"
						required
					/>
				</div>*/}

				{ /*<input name="email" placeholder="king@google.com" type="email"/>*/ }

				{/*<textarea name="message"/>*/}
				<button>Send</button>
			</form>

			<form
				name="contact-form"
				method="post"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
			>
				<div>
				<input name="name" placeholder="Your Name" type="text" />
				</div>
				<span>
				<input name="email" placeholder="name@name.com" type="email" />
				</span>
				<textarea name="message" />
				<button>Send</button>
			</form>
		</div>
	);
};
export default Contact;
