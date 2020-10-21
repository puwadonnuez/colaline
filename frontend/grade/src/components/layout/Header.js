import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
	render() {
		const { brand } = this.props;
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<a href="/" className="navbar-brand mr-auto">
						<strong>{brand}</strong>
					</a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
            <span className="toggler-icon">
                <i className="fas fa-bars"></i>
            </span>
        </button>
					<div className="collapse navbar-collapse" id="myNavbar">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link to="/" className="nav-link">
									 เพิ่มรายวิชา
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/results" className="nav-link">
									 ดูรายวิชาที่ลงทะเบียน
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}


export default Header;
