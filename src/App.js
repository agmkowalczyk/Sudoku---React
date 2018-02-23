import React, { Component } from 'react';
import Board from './Board';
import sudoku from 'sudoku-umd';
import './App.css';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Sudoku</h1>
//         </header>
      
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialBoard: '',
      board: ''
    };
    this.handleNewGame = this.handleNewGame.bind(this);
    this.handleSolve = this.handleSolve.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    
  }

  handleNewGame(e) {
    const newSudoku = sudoku.generate("easy");
    // const newSudoku = '123456789123456789123456789123456789123456789123456789123456789123456789123456789';
    this.setState({
      initialBoard: newSudoku,
      board: newSudoku
    });
    
    console.log(newSudoku);
    sudoku.print_board(newSudoku);
  }

  handleSolve(e) {
    const solve = sudoku.solve(this.state.board);
    if (solve === false) {
      alert ('There is no solution.\nYou should improve your sudoku.');
    } else {
      this.setState({
        board: solve
      });
  }
  }

  handleRestart(e) {
    const restart = this.state.initialBoard;
    this.setState({
      board: restart
    });
  }

  handleCheck(e) {
    const check = sudoku.solve(this.state.board);
    if (check === false) {
      alert ('There is no solution.\nYour sudoku must be corrected.');
    } else {
      alert ('You are on the good way.\nKeep going!');
    }
  }

  updateBoard(id, tile) {
    const updatedBoard = this.state.board.split('');
    const checkTile = (tile !== '') ? tile : '.'; 
    updatedBoard.splice(id, 1, checkTile);
    const newBoard = updatedBoard.join('');
    this.setState({
      board: newBoard
    });
  }

  render() {
    if (this.state.initialBoard === '') this.handleNewGame();
    return (
      <div className={'container'}>
      <h1>Sudoku</h1>
        <div className={'buttons'}>
            <button onClick={this.handleNewGame}>New Game</button>
            <button onClick={this.handleCheck}>Check</button>
            <button onClick={this.handleSolve}>Solve</button>
            <button onClick={this.handleRestart}>Restart</button>
        </div>
        <Board board={this.state.board}
               initialBoard={this.state.initialBoard}
               updateBoard={this.updateBoard}/>
      </div>
    );
  }
}

export default App;
