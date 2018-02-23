import React from 'react';
import './Tile.css';

class Tile extends React.Component {
  handleChange(e) {
    this.props.updateBoard(e.target.name, e.target.value);
  }

  render() {
    const opts = {};
    this.props.readonly === 1 ? opts['readOnly'] = 'readOnly' : '';

    return (
      <input 
        type="number" 
        min="1" 
        max="9" 
        data={this.props.readonly}
        className={this.props.readonly === 1 ? 'tile readonly' : 'tile'}
        {...opts}
        name={this.props.id}
        value={!isNaN(this.props.tile) ? this.props.tile : ''} 
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}

export default Tile;