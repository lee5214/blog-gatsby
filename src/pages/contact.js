import React from 'react';
import { TextField } from 'material-ui';

function encode (data) {
	return Object.keys (data)
	             .map ((key) => encodeURIComponent (key) + '=' + encodeURIComponent (data[key]))
	             .join ('&');
}

export default class Contact extends React.Component {
	constructor (props) {
		super (props);
		this.state = {};
	}

	handleChange = (e) => {
		this.setState ({[e.target.name] : e.target.value});
	};

	handleSubmit = e => {
		fetch ('/', {
			method : 'POST',
			headers : {'Content-Type' : 'application/x-www-form-urlencoded'},
			body : encode ({'form-name' : 'contact', ...this.state}),
		})
			.then (() => alert ('Success!'))
			.catch (error => alert (error));

		e.preventDefault ();
	};

	render () {
		return (
			<div style={ {display : 'flex',flexDirection:'column', justifyContent : 'center', alignItems:'center'} }>
				<p>Send to my email: cong-li@cong-li.com</p>
				<p>Or send a message here</p>
				<form
					name="contact"
					method="post"
					action="/thanks/"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					onSubmit={ this.handleSubmit }
				>
					<p hidden>
						<label>
							Don’t fill this out: <input name="bot-field"/>
						</label>
					</p>

					<TextField
						id="with-placeholder"
						name={ 'name' }
						label='Name'
						placeholder="John Snow"
						type="text"
						required
						onChange={ this.handleChange }
					/>
					<br/>
					<TextField
						id="with-placeholder"
						name={'email'}
						label='Email'
						placeholder="xxxx@xxxx.com"
						type="text"
						required
						onChange={ this.handleChange }
					/>
					<br/>
					<TextField
						id="multiline-static"
						name={'message'}
						label="Multiline"
						multiline
						rows="4"
						margin="normal"
						required
						onChange={ this.handleChange }
					/>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
			</div>
		);
	}
}
