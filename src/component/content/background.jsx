import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GetTetromino from './getTetromino.jsx';

export default class Background extends React.Component {
  render() {
    const {rows, columns} = this.props;

    const listItems = columns.map((col)=>
        <tr>
        {
          rows.map((row)=>
            <td
            className="square"
            key={row.toString()}
            value={col*10 + row}
            ref="squareVal">
            </td>
          )
        }
        </tr>
    );

    return (
      <div className="tetris-bg">
        <table className="tetris-table">
          <tbody>
            {listItems}
          </tbody>
        </table>
      </div>
    );
  }
}
