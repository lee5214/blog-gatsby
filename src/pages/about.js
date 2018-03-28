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
			<div>
				<h1>Contact</h1>
				<form
					name="contact"
					method="post"
					action="/thanks/"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					onSubmit={ this.handleSubmit }
				>
					<TextField
						id="with-placeholder"
						name={ 'name' }
						label='Name'
						placeholder="John Snow"
						type="text"
						required
						onChange={ this.handleChange }
					/>
					<p hidden>
						<label>
							Don’t fill this out: <input name="bot-field"/>
						</label>
					</p>

					<p>
						<label>
							Your email:<br/>
							<input type="email" name="email" onChange={ this.handleChange }/>
						</label>
					</p>
					<p>
						<label>
							Message:<br/>
							<textarea name="message" onChange={ this.handleChange }/>
						</label>
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
			</div>
		);
	}
}
