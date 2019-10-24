import React from 'react'
import { Link } from 'react-router-dom'

class NewTicket extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			description: ''
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

  	onChange(event) {
  		this.setState({ [event.target.name]: event.target.value })
  	}

  	onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/tickets/create";
    const { name, description } = this.state;

    if (name.length == 0 || description.length == 0)
      return;

    const body = {
      name,
      description
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push(`/ticket/${response.id}`))
      .catch(error => console.log(error.message));
    }

    render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal">
              Create a new Ticket
            </h1>
            <hr/>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="recipeName">Ticket name</label>
                <input
                  type="text"
                  name="name"
                  id="ticketName"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ticketDescription">Description</label>
                <textarea
                  type="text"
                  name="description"
                  id="ticketDescription"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Create Ticket
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewTicket