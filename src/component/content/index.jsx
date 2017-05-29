import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Background from './background.jsx';

export default class Content extends React.Component {

	render() {
	  const rows = [0,1,2,3,4,5,6,7,8,9];
		const columns = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
		return (
			<div>
				<Background rows={rows} columns={columns}/>
			</div>
		);
	}
}
