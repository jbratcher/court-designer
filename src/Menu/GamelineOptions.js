import React, { Component } from 'react';
import '../styles/App.scss';

class GamelineOptions extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {};
      
    }
    
    componentDidMount() {
      console.log(this.props)
    }
  
  render() {

    const {
      gamelineOptions,
      handleColorReset,
      handleColorStain,
      handleMenuClick,
      handleInputChange
    } = this.props;

    return (
            
      <li className="gamelineOptions">
              
        <section>
          <span>Game lines</span>
          <a 
            className="menuOptionsLink"
            href="#gamelineOptions"
            onClick={handleMenuClick}
          >
            <i className="fas fa-caret-down"></i>
          </a>
        </section>
        
        {gamelineOptions ?
        
          <section className="expandedMenu">
          
            <label>Main Gameline:
              <input
                className="mainGamelineColor"
                name="mainGamelineColor"
                onChange={handleInputChange}
                type="color">
              </input>
            </label>
            
            <label>Stain:
              <input
                className="mainGamelineStain"
                min="0.1"
                max="1.0"
                step="0.1"
                name="mainGamelineColor"
                onChange={handleColorStain}
                type="number">
              </input>
            </label>
            
            <button 
              className="mainGameLineResetColor"
              name="mainGameLineResetColor"
              type="button"
              onClick={handleColorReset}
            >
              Reset
            </button>
            
          </section>
        
        : null}
        
      </li>

    );
  }
}

export default GamelineOptions;
