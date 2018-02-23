import React from 'react';
import './Tile.css';

class Tile extends React.Component {
  handleChange(e) {
    this.props.updateBoard(e.target.dataset.id, e.target.value);
  }

  render() {
    const opts = {};
    opts['readOnly'] = (this.props.readonly === 1) ? 'readOnly' : '';

    return (
      <input 
        type="number" 
        min="1" 
        max="9" 
        data-id={this.props.id}
        className={this.props.readonly === 1 ? 'tile readonly' : 'tile'}
        {...opts}
        value={!isNaN(this.props.tile) ? this.props.tile : ''} 
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}

export default Tile;