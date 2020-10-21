import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

class Success extends Component {
    
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="success">
				<form onSubmit={this.displayLogin}>
					<h2>Success</h2>
					<div className="name">
                        ยินดีต้อนรับ {this.props.location.state.user_name}
					</div>
				</form>
				<Link to="/">Logout Here</Link>
                
			</div>
        );
        
    }
}

export default Success;
