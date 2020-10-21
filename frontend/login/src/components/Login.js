import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import Success from './Success';
import { Redirect } from 'react-router-dom';
import auth from './Auth'

class Login extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			username: '',
			password: '',
			redirect: false
		};
		this.update = this.update.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}
	setRedirect = () => {
		this.setState({
		  redirect: true
		})
	  }
	handleSubmit(){
		if (this.state.redirect && this.state.password == 'P@$$W0RD') {
			auth.login();
			return <Redirect to={{pathname:'/success', state:{ user_name: this.state.username}}}/>
		}
		}
	render() {
		return (
			<div className="login">
				<form>
					<h2>Login</h2>
					<div className="username">
						<input
							type="text"
							placeholder="Username..."
							value={this.state.username}
							onChange={this.update}
							name="username"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>
					
					{/* <Link to ="/success"><input type="submit" value="Login" onClick={this.handleSubmit} /></Link> */}
					{this.handleSubmit()}
					<input type="submit" value="Login" onClick={this.setRedirect} />
					
				</form>
			</div>
		);
	}
	
}
export default Login;
