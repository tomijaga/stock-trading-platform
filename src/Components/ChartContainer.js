import React, { Component } from 'react';


export default class ChartContainer extends Component {
	constructor(props) {
		super(props);
		this.style = {

		}
	}

	render() {
		return (
			<div>
				<div />
				<div />
				{this.props.children}
			</div>
		)
	}
}