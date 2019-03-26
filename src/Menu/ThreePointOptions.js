import React, { Component } from 'react';
import '../styles/App.scss';

class ThreePointOptions extends Component {
    
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
      threePointOptions,
      threePointOptionsMenuIcon
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
            <i className={threePointOptionsMenuIcon}></i>
          </a>
        </section>
        
        {threePointOptions ?
        
        <section className="expandedMenu">
        
          <form className="form-group">
        
            <label className="input-group-text">3 Point Area Color:
              <input
                className="threePointAreaColor"
                name="threePointAreaColor"
                onChange={handleInputChange}
                type="color">
              </input>
            </label>
            
            <label className="input-group-text">Stain:
              <input
                className="threePointStain form-control"
                min="0.1"
                max="1.0"
                step="0.1"
                name="threePointAreaColor"
                onChange={handleColorStain}
                type="number">
              </input>
            </label>
            
            <button 
              className="threePointAreaResetColor btn btn-danger"
              name="threePointAreaResetColor"
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

export default ThreePointOptions;



