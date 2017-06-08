import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square.jsx';

import './index.css';


export default class Row extends React.Component {


	render() {
		let count = this.props.count;

		return (
			<div>
				<div className="board-row">
					<Square count={ count }/>
				</div>	
			</div>
		);
	}
}