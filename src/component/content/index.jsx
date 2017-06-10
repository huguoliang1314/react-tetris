import React from 'react';
import ReactDOM from 'react-dom';
import Row from './row.jsx';
import Background from './background.jsx';

import './index.css';


export default class Content extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			isInit: true,
			count: 3
		}
	}

	componentDidMount(){
		var timeId = setInterval(()=> {
			this.state.count > 1 ? 
			this.setState({
				count: this.state.count - 1
			}) : (this.clearOverlay(),clearTimeout(timeId));
		}, 1000)
	}

	clearOverlay(){
		this.setState({
			isInit: false
		});
	}

	render() {
		const rows = [], columns = [];
		for(var i=0; i< 10; i++){
			rows.push(i);
			columns.push(i);
		}

		return (
			<div>
				{
					this.state.isInit ? (
						<div className="overlay-content">
							<p className="overlay-count">{this.state.count}</p>
						</div>
					):(<div></div>)
				}
				<div className="board-content">
					<Background rows={ rows } columns={ columns} />
				</div>		
			</div>
		);
	}
}