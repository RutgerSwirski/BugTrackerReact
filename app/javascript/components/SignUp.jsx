import React from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignUp extends React.Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			password_confirmation: ''
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(event) {
  		this.setState({ [event.target.name]: event.target.value })
	}

	onSubmit(event) {
		event.preventDefault()
		if (this.state.password != this.state.password_confirmation) {
			alert("Password's Must Match")
		} else {
			const url = '/api/v1/auth'
	  		const { email, password } = this.state
	  		const userDetails = {
	  			email,
	  			password
	  		}
	  		const token = document.querySelector('meta[name="csrf-token"]').content;
	  		fetch(url, {
		      method: "POST",
		      headers: {
		        "X-CSRF-Token": token,
		        "Content-Type": "application/json"
		      },
		      body: JSON.stringify(userDetails)
		    })
		      .then(response => {
		        if (response.ok) {
		          return response.json();
		        }
		        throw new Error("Network Error");
		      })
		      .then(response => this.props.history.push('/'))
		      .catch(error => alert(error.message));
		}
	}

	render() {
		return(
			<div className="container mt-5">
				<h1 className="text-center font-weight-light">Sign Up</h1>
				<hr/>
				<div className="row">
					<Form onSubmit={this.onSubmit} className="w-50 offset-sm-3">
					  <Form.Group controlId="formBasicEmail">
					    <Form.Label>Email address</Form.Label>
					    <Form.Control type="email" placeholder="Enter email" onChange={this.onChange} name="email" />
					    <Form.Text className="text-muted">
					      We'll never share your email with anyone else.
					    </Form.Text>
					  </Form.Group>
					  <Form.Group controlId="formBasicPassword">
					    <Form.Label>Password</Form.Label>
					    <Form.Control type="password" placeholder="Password" onChange={this.onChange} name="password" />
					  </Form.Group>
					  <Form.Group controlId="formBasicPassword">
					    <Form.Label>Password Confirmation</Form.Label>
					    <Form.Control type="password" placeholder="Password Confirmation" onChange={this.onChange} name="password_confirmation" />
					  </Form.Group>
					  <Button variant="primary" type="submit">
					    Sign Up
					  </Button>
					</Form>
				</div>
			</div>
		)
	}
}

export default SignUp