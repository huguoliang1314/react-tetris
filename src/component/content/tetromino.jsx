import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class Tetromino extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tetromino: 'S'
    }
  }

  componentDidMount(){
    const arr = ['S','Z','L','J','I','O','T'];
    const name = arr.map(v => v.toLocaleLowerCase() + '-active');

    this.timerId = setInterval(()=>{
      let index = Math.floor(Math.random()*arr.length);

      this.moveTetro(name[index], arr[index]);
      // this.renderInitTetro(arr[index]);
    },5000);
  }

  renderInitTetro(tetromino){
    // const tetromino = this.props;
    
  }

  countSharpe(type, i){
    var position = [];
    switch (type.toLocaleLowerCase()) {
      case 's':
        position.push(i, i+1, i+9, i+10);
        break;
      case 'i':
        position.push(i, i+1, i+2, i+3);
        break;
      case 'l':
        position.push(i, i+10, i+11, i+12);
        break;
      case 'j':
        position.push(i, i+8, i+9, i+10);
        break;
      case 'o':
        position.push(i, i+1, i+10, i+11);
        break;
      case 'z':
        position.push(i, i+1, i+11, i+12);
        break;
      case 't':
        position.push(i, i+9, i+10, i+11);
        break;
      // default:
        // this.addClass('s-active');

    }

    return position;
  }

  addClass(name, selector){
    let elem;
    Array.isArray(selector) && Array.from(selector, function(i){
      elem = document.getElementsByClassName('square')[i];
      let className = elem.className;

      if (/\b-active\b/.test(className)) {
          className = 'square'
      }

      elem.className = className + ' ' + name;      
    });
  }

  removeClass(){
    let selector = document.getElementsByClassName('square');

    Array.from(selector, function(i){
      let elem = document.getElementsByClassName('square')[i];
      
      let className = elem.className;

      if (/\b-active\b/.test(className)) {
          className = 'square'
      }
    })
  }

  moveTetro(name, type){
    let i = 4;
    let tetrominoId = setTimeout(() => {
      let posArr = this.countSharpe(type,i);
      this.removeClass();
      this.addClass(name, posArr);
    },2000)
  }

  render() {

    return (
      <div></div>
    );
  }
}
