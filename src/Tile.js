import React from 'react';
import './Tile.css';

class Tile extends React.Component {
  handleChange(e) {
    this.props.updateBoard(e.target.dataset.id, e.target.value);
  }

  render() {
    const opts = {};
    opts['readOnly'] = (this.props.readonly === 1) ? 'readOnly' : '';

    const borderLine = 
      ((this.props.id > 17 && this.props.id < 27) || 
       (this.props.id > 44 && this.props.id < 54)) 
       ? 'border-line' : '';
    
    return (
      <input 
        type="number" 
        min="1" 
        max="9" 
        data-id={this.props.id}
        className={this.props.readonly === 1 ? 'tile readonly ' + borderLine : 'tile ' + borderLine}
        {...opts}
        value={!isNaN(this.props.tile) ? this.props.tile : ''} 
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}

export default Tile;