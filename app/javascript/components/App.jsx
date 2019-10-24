import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './NavBar'
import Home from './Home'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Tickets from './Tickets'
import Ticket from './Ticket'
import NewTicket from './NewTicket'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			currentUser: null
		}
	}

	render() {
		return(
			<div>
				<Router>
					<NavBar />
					<Switch>
						<Route path="/" exact component={ Home } />
						<Route path="/sign_up" exact component={ SignUp } />
						<Route path="/sign_in" exact component={ SignIn } />
						<Route path="/tickets" exact component={ Tickets } />
						<Route path="/ticket/:id" exact component={ Ticket } />
						<Route path="/ticket" exact component={ NewTicket } />
					</Switch>
				</Router>
			</div>
		)
	}

}

export default App
