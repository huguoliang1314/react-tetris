import React from 'react';
import ReactDOM from 'react-dom';
import Row from './row.jsx';

import './index.css';


export default class Content extends React.Component {


	render() {
		const rows = [];
		for(var i=0; i< 10; i++){
			rows.push(i);
		}

		return (
			<div>
				<div className="board-content">
				{
					rows.map((number) => <Row key={number.toString()} count={ 10 } />)
				}
				</div>
			</div>
		);
	}
}