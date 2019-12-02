import React from 'react'
import httpClient from '../httpClient'

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
	state = {
		fields: { name: '', email: '', password: '' }
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.signUp(this.state.fields).then(user => {
			this.setState({ fields: { name: '', email: '', password: '' } })
			if (user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})
	}

	render() {
		const { name, email, password } = this.state.fields
		return (
			<div className='SignUp'>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1 className="s-title">Sign Up</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<label for="formname">Name</label>
							<input id="formname" type="text" name="name" value={name} />
							<label for="formemail">Email</label>
							<input id="formemail" type="text" name="email" value={email} />
							<label for="formpassword">Password</label>
							<input id="formpassword" type="password" name="password" value={password} />
							<button className="signup-button">Sign Up</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default SignUp