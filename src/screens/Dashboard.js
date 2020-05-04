import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
			plan: ''
		};
	}
	async componentDidMount() {
		const InUser = await JSON.parse(localStorage.getItem('user'));
		if (InUser.plan === '') {
			return this.props.history.push('/');
		}
		this.setState({ user: InUser.data, plan: InUser.plan });
		console.log(this.state);
	}
	render() {
		return (
			<div>
				<h1>Welcome {this.state.user.name} </h1>
				<h4>Plan: {this.state.plan}</h4>
				<Link to="/" class="link">
					<div className="btn_wrap btn color2">Change plan</div>
				</Link>
			</div>
		);
	}
}

export default withRouter(Dashboard);
