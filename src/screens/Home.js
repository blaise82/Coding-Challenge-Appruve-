import React, { Component } from 'react';
import '../styles/home.scss';
import { withRouter } from 'react-router-dom';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				name: 'Izabayo Blaise',
				email: 'izabayoblaise@gmail.com'
			},
			Plan: ''
		};
	}
	componentDidMount() {
		if (!localStorage.getItem('user')) {
			localStorage.setItem('user', JSON.stringify(this.state.user));
		}
	}
	handleClick = (name) => {
		localStorage.removeItem('user');
		const UpdatedUser = { data: this.state.user, plan: name };
		localStorage.setItem('user', JSON.stringify(UpdatedUser));
		return this.props.history.push('/dashboard');
	};
	render() {
		return (
			<div>
				<div className="pricing-plan-list">
					<div className="pricing-plan">
						<h2 className="pricing-plan__name">Bronze</h2>
						<h1 className="pricing-plan__price">$9</h1>
						<small className="pricing-plan__disclosure">charged on a monthly basis</small>
						<ul className="pricing-plan__feature-list">
							<li className="pricing-plan__feature">1 account</li>
							<li className="pricing-plan__feature">Up to 10,000 followers</li>
							<li className="pricing-plan__feature">Basic analytics reports</li>
							<li className="pricing-plan__feature">5 reports per month</li>
						</ul>
						<div
							className="btn_wrap btn color1"
							name="Bronze"
							price="9"
							onClick={() => this.handleClick('Bronze')}
						>
							Choose Plan
						</div>
					</div>
					<div className="pricing-plan pricing-plan--featured">
						<h2 className="pricing-plan__name">Silver</h2>
						<h1 className="pricing-plan__price">$29</h1>
						<small className="pricing-plan__disclosure">charged on a monthly basis</small>
						<ul className="pricing-plan__feature-list">
							<li className="pricing-plan__feature">10 accounts</li>
							<li className="pricing-plan__feature">Up to 100,000 followers</li>
							<li className="pricing-plan__feature">Standard analytics report</li>
							<li className="pricing-plan__feature">100 reports per month</li>
						</ul>
						<div
							className="btn_wrap btn color2"
							name="Silver"
							price="29"
							onClick={() => this.handleClick('Silver')}
						>
							Choose Plan
						</div>
					</div>
					<div className="pricing-plan">
						<h2 className="pricing-plan__name">Gold</h2>
						<h1 className="pricing-plan__price">$99</h1>
						<small className="pricing-plan__disclosure">charged on a monthly basis</small>
						<ul className="pricing-plan__feature-list">
							<li className="pricing-plan__feature">Unlimited accounts</li>
							<li className="pricing-plan__feature">Unlimited followers</li>
							<li className="pricing-plan__feature">Advanced analytics reports</li>
							<li className="pricing-plan__feature">Unlimited reports</li>
						</ul>
						<div
							className="btn_wrap btn color3"
							name="Gold"
							price="99"
							onClick={() => this.handleClick('Gold')}
						>
							Choose Plan
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Home);
