import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
	render() {
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to="/" className="navbar-brand">
	               	BugFixers
	            </Link>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNav">
			    <ul className="navbar-nav">
			      <li className="nav-item">
			        <Link to="/ticket" className="nav-link">
	                	Open a Ticket
	                </Link>
			      </li>
			      <li className="nav-item">
			        <Link to="/tickets" className="nav-link">
	                	View Tickets
	                </Link>
			      </li>
			    </ul>
			  </div>
			</nav>
		)
	}
}

{/*
<li className="nav-item">
	<Link to="/sign_up" className="nav-link">
	Sign Up
</Link>
</li>
<li className="nav-item">
<Link to="/sign_in" className="nav-link">
	Sign In
</Link>
</li>
*/}

export default NavBar