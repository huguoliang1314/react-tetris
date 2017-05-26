import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './component/header/index.jsx';
import Content from './component/content/index.jsx';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Header name= {'俄罗斯方块欢迎你'}/>
				<Content /> 
			</div>
		);
	}
}

ReactDOM.render(
	<Home />,
	document.getElementById('root')
);