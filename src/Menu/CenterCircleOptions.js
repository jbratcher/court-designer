import React, { Component } from 'react';
import '../styles/App.scss';

class CenterCircleOptions extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {
        
      };
      
    }
    
    componentDidMount() {
      console.log(this.props);
    }
  
  render() {
    
    const {
      centerCircleOptions,
      centerCircleOptionsMenuIcon,
      handleColorReset,
      handleColorStain,
      handleMenuClick,
      handleImage,
      handleInputChange,
    } = this.props;

    return (
            
      <li className="centerCircleOptions">
      
          <section>
            <a 
              className="menuOptionsLink"
              href="#centerCircleOptions"
              onClick={handleMenuClick}
            >
              <span>Center Circle</span>
              <i className={centerCircleOptionsMenuIcon}></i>
            </a>
          
          </section>
          
          {centerCircleOptions ?
          
          <section className="expandedMenu">
          
            <label>Center Circle Paint Color:
              <input
                className="centerCircleColor"
                name="centerCircleColor"
                onChange={handleInputChange}
                type="color">
              </input>
            </label>
            
            <label>Stain:
              <input
                className="centerCircleStain"
                min="0.1"
                max="1.0"
                step="0.1"
                name="centerCircleColor"
                onChange={handleColorStain}
                type="number">
              </input>
            </label>
            
            <label className="centerCirlceImageInput"> Upload File
              <input 
                onChange={handleImage}
                name="centerCirlceImage" 
                type="file" 
                accept="image/*">
              </input>
            </label>
            
            <button 
              className="centerCirlceResetColor"
              name="centerCirlceResetColor"
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

export default CenterCircleOptions;
