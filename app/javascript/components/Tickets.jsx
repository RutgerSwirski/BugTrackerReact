import React from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

class Tickets extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tickets: []
		}
	}

	componentDidMount() {
		const url = '/api/v1/tickets/index'
		fetch(url)
		.then(response => {
			if (response.ok) {
				return response.json()
			}
			throw new Error("Network response was not ok.");
		})
		.then(response => { this.setState({ tickets: response }) })
		.catch(() => this.props.history.push('/'))
	}

	render() {
		const { tickets } = this.state.tickets

		const allTickets = this.state.tickets.map((ticket, index) => (
	      <div key={index} className="col-12 col-md-6">
	        <div className="card mb-4 text-center">
	          <div className="card-body">
	            <h5 className="my-5">{ticket.name}</h5>
	            <Link to={`/ticket/${ticket.id}`} className="btn btn-secondary">
	              View Ticket
	            </Link>
	            <hr/>
	            <p>Solved?</p> 
	            {ticket.solved ? <FontAwesomeIcon icon={faCheck} size="lg" /> : <FontAwesomeIcon icon={faTimes} size="lg" /> }
	          </div>
	        </div>
	      </div>
	    ))

	    const noTickets = (
	    	<div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
		        <h4>
		          No tickets yet. Open one <Link to="/ticket">here</Link>
		        </h4>
		    </div>
	    )
		return(
			<div>
		        <div className="text-center">
		          <div className="container pt-5">
		            <h1 className="display-4">Tickets</h1>
		            <hr/>
		            <p className="lead text-muted">
		             
		            </p>
		          </div>
		        </div>
		        <div className="py-3">
		          <main className="container">
		            <div className="text-right mb-4">
		              <Link to="/ticket" className="btn btn-primary">
		                Create New Ticket
		              </Link>
		            </div>
		            <div className="row">
		              {this.state.tickets.length > 0 ? allTickets : noTickets}
		            </div>
		          </main>
		        </div>
	        </div>
		)
	}

}

export default Tickets