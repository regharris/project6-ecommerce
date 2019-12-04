import React from 'react'
import httpClient from '../httpClient'

class LogIn extends React.Component {
	state = {
		fields: { email: '', password: '' }
	}
	//setting state upon input
	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}
	// preventing user leaving field empty
	onFormSubmit(evt) {
		evt.preventDefault()
		httpClient.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			if (user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/')
			}
		})
	}
	// rendering login form 
	render() {
		const { email, password } = this.state.fields
		return (
			<div className='LogIn'>
				<div className='row'>
					<div className='column column-33 column-offset-33'>
						<h1 className="s-title">Log In</h1>
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<label for="formemail2">Email</label>
							<input id="formemail2" type="text" name="email" value={email} />
							<label for="formpassword2">Password</label>
							<input id="formpassword2" type="password" name="password" value={password} />
							<button className="signup-button">Log In</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default LogIn