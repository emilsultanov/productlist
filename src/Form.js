import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class FormPage extends Component {
	state = {};

	getFormValue = event => {
		let name = event.target.name;
		let value = event.target.value;

		this.setState({
			[name]: value
		});
	};

	sendFormValue = event => {
		event.preventDefault();
	};

	render() {
		return (
			<div className="form-wrapper">
				<h3>Form Page</h3>
				<Form onSubmit={this.sendFormValue}>
					<FormGroup>
						<Label for="email">Email</Label>
						<Input
							type="email"
							name="email"
							id="email"
							placeholder="Enter email"
							onChange={this.getFormValue}
						/>
					</FormGroup>

					<FormGroup>
						<Label for="password">Password</Label>
						<Input
							type="password"
							name="password"
							id="password"
							placeholder="Enter password"
							onChange={this.getFormValue}
						/>
					</FormGroup>

					<FormGroup>
						<Label for="city">Select</Label>
						<Input
							type="select"
							name="city"
							id="city"
							onChange={this.getFormValue}
						>
							<option>Baku</option>
							<option>Ganca</option>
							<option>Lankaran</option>
							<option>Sumqayit</option>
						</Input>
					</FormGroup>

					<FormGroup>
						<Label for="description">Text Area</Label>
						<Input
							type="textarea"
							name="description"
							id="description"
							onChange={this.getFormValue}
						/>
					</FormGroup>

					<Button type="submit">Submit</Button>
				</Form>
			</div>
		);
	}
}

export default FormPage;
