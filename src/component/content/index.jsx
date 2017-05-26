import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


export default class Content extends React.Component {
	render() {
		return (
			<div>
				<div>
					<div className="board-row">
						<button className="square"></button>
						<button className="square"></button>
						<button className="square"></button>
						<button className="square"></button>
					</div>
					<div className="board-row">
						<button className="square"></button>
						<button className="square"></button>
						<button className="square"></button>
						<button className="square"></button>
					</div>
					<div className="board-row">
						<button className="square"></button>
						<button className="square"></button>
						<button className="square"></button>
						<button className="square"></button>
					</div>
				</div>
			</div>
		);
	}
}