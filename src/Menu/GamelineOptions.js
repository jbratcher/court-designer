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
      gamelineOptionsMenuIcon,
      handleColorReset,
      handleMenuClick,
      handleInputChange
    } = this.props;

    return (
            
      <li className="gamelineOptions">
              
        <section>
          <a 
            className="menuOptionsLink"
            href="#gamelineOptions"
            onClick={handleMenuClick}
          >
            <span>Game lines</span>
            <i className={gamelineOptionsMenuIcon}></i>
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
