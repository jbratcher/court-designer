import React, { Component } from 'react';
import '../styles/App.scss';

class CenterCircleOptions extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {
        centerCircleOptions: false
      };
      
    }
    
    handleClick = e => {
      console.log(e.target.parentElement.parentElement.className);
      let menuElementClass = e.target.parentElement.parentElement.parentElement.className;
      console.log(menuElementClass);
      this.setState(prevState => ({
        [menuElementClass]: !prevState[menuElementClass]
      }));
    }
    
  render() {

    const {
      handleColorReset,
      handleColorStain,
      handleImage,
      handleInputChange
    } = this.props;
    
    const {
      centerCircleOptions
    } = this.state;

    return (
            
      <li className="centerCircleOptions">
      
          <section>
            <span>Center Circle</span>
            <a 
              className="menuOptionsLink"
              href="#centerCircleOptions"
              onClick={this.handleClick}
            >
              <i className="fas fa-caret-down"></i>
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
