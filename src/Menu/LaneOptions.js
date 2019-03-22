import React, { Component } from 'react';
import '../styles/App.scss';

class LaneOptions extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {};
      
    }
    
    componentDidMount() {
    }
  
  render() {

    const {
      handleColorReset,
      handleColorStain,
      handleMenuClick,
      handleInputChange,
      laneOptions,
      laneOptionsMenuIcon
    } = this.props;

    return (
            
      <li className="laneOptions">
      
        <section>
          <a 
            className="menuOptionsLink"
            href="#laneOptions"
            onClick={handleMenuClick}
          >
            <span>Lanes</span>
            <i className={laneOptionsMenuIcon}></i>
          </a>
        </section>
        
        {laneOptions ?
        
          <section className="expandedMenu">
          
            <label>Lane Color:
              <input
                className="laneColor"
                name="laneColor"
                onChange={handleInputChange}
                type="color">
              </input>
            </label>
            
            <label>Stain:
              <input
                className="laneColorOpacity"
                min="0.1"
                max="1.0"
                step="0.1"
                name="laneColor"
                onChange={handleColorStain}
                type="number">
              </input>
            </label>
            
            <button 
              className="laneResetColor"
              name="laneResetColor"
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

export default LaneOptions;



