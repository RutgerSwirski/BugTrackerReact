import React from 'react'

import { Link } from "react-router-dom";

class Ticket extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			ticket: ''
		}

		this.handleOnClick = this.handleOnClick.bind(this)
	}
	componentDidMount() {
	    const {
	      match: {
	        params: { id }
	      }
	    } = this.props;

	  const url = `/api/v1/show/${id}`

	  fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ ticket: response }))
      .catch(() => this.props.history.push("/tickets"));
	}

	handleOnClick(){
		const {
	      match: {
	        params: { id }
	      }
	    } = this.props;

	  const url = `/api/v1/show/${id}/solved`

	  fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ ticket: response }))
      .catch(() => this.props.history.push("/tickets"));
		// this.setState({ ticket: { solved: true }})
	}


	render() {
		const { ticket } = this.state;
		return(
			<div className="">
		        <div className="hero position-relative d-flex align-items-center justify-content-center">
		          <div className="overlay bg-dark position-absolute" />
		          <h1 className="display-3 position-relative py-3">
		            {ticket.name}
		          </h1>
		        </div>
		        <div className="container py-5 text-center">
			        <div className="row">
			        	<div className="col-4 px-4">
			        		<h4>
				        		{ ticket.solved ? "Ticket Solved!" : "Ticket Not Solved" }
			        		</h4>
			        		{ ticket.solved ? null : <button className="btn btn-primary mt-3" onClick={ this.handleOnClick }>Mark as Solved</button> }
			        	</div>
			        	<div className="col-8 px-4">
			        		<h2>What's the issue?</h2>
			        		<hr/>
		          			{ticket.description}
			        	</div>
			        </div>
		        </div>
		    </div>
		)
	}
}

export default Ticket