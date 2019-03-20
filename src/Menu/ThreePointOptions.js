import React, { Component } from 'react';
import '../styles/App.scss';

class ThreePointOptions extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {};
      
    }
    
    componentDidMount() {
      console.log(this.props)
    }
  
  render() {

    const {
      threePointOptions,
      handleColorReset,
      handleColorStain,
      handleMenuClick,
      handleInputChange
    } = this.props;

    return (
            
      <li className="threePointOptions">
      
        <section>
          <a 
            className="menuOptionsLink"
            href="#threePointOptions"
            onClick={handleMenuClick}
          >
            <span>3 Point Area</span>
            <i className="fas fa-caret-down"></i>
          </a>
        </section>
        
        {threePointOptions ?
        
        <section className="expandedMenu">
        
          <label>3 Point Area Color:
            <input
              className="threePointAreaColor"
              name="threePointAreaColor"
              onChange={handleInputChange}
              type="color">
            </input>
          </label>
          
          <label>Stain:
            <input
              className="threePointStain"
              min="0.1"
              max="1.0"
              step="0.1"
              name="threePointAreaColor"
              onChange={handleColorStain}
              type="number">
            </input>
          </label>
          
          <button 
            className="threePointAreaResetColor"
            name="threePointAreaResetColor"
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

export default ThreePointOptions;



