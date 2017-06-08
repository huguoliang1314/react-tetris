import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


export default class Row extends React.Component {


	render() {
		const count = this.props.count;
		const coloms = [];
		for(var i=0; i< count; i++){
			coloms.push(i);
		}

		return (
			<div>
				{
					coloms.map((number) => <button className="square" key={number.toString() } ></button>)		
				}
			</div>
		);
	}
}