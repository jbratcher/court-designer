import React, { Component } from 'react';
import '../styles/App.scss';

class GamelineOptions extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {};
      
    }
    
    componentDidMount() {
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
        
        <section className="expandedMenu input-group">
        
          <form className="form-group">
        
            <label className="input-group-text">Main Gameline:
              <input
                className="mainGamelineColor"
                name="mainGamelineColor"
                onChange={handleInputChange}
                type="color">
              </input>
            </label>
            
            <button 
              className="mainGameLineResetColor btn btn-danger"
              name="mainGameLineResetColor"
              type="button"
              onClick={handleColorReset}
            >
              Reset
            </button>
            
          </form>
            
        </section>
        
        : null}
        
      </li>

    );
  }
}

export default GamelineOptions;
