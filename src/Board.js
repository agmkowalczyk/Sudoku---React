import React from 'react';
import Tile from './Tile';
import './Board.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.updateBoard = props.updateBoard.bind(this);
  }
  
  render() {
    const arrBoard = this.props.board.split('');
    return (
      <div className={'board'}>
      {arrBoard.map((tile, index) => <Tile 
          key={index} 
          id={index} 
          tile={tile} 
          readonly={
            this.props.initialBoard[index] !== '.' ? 1 : 0
          } 
          updateBoard={this.updateBoard}/>)}
      </div>
    );
  }
}

export default Board;