import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class Header extends React.Component {

	render() {
		const { name } = this.props;
		return (
			<div>
				<p className="header">{ name }</p>
			</div>
		);
	}
}
