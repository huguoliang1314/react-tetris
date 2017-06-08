import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class GetTetromino extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tetromino: 'S'
    }
  }

  componentDidMount(){
    const arr = ['S','Z','L','J','I','O','T'];

    this.timerId = setInterval(()=>{
      let index = Math.floor(Math.random()*arr.length);

      // this.setState({
      //   tetromino: arr[index]
      // });
      this.renderInitTetro('i');
    },1000);
  }

  renderInitTetro(tetromino){
    // const tetromino = this.props;
    alert(111);
    switch (tetromino.toLocaleLowerCase()) {
      case 'i':
        this.addClass('i-active');
        break;
      default:
        this.addClass('s-active');

    }
  }

  addClass(selector, name){
    const sel = selector || 'square';
    let className = document.getElementByClass(sel)[0];
    return className += name;
  }

  render() {

    return (
      <div>

      </div>
    );
  }
}
