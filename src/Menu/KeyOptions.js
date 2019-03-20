import React, { Component } from 'react';
import '../styles/App.scss';

class KeyOptions extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {};
      
    }
    
    componentDidMount() {
      console.log(this.props)
    }
  
  render() {

    const {
      keyOptions,
      handleColorReset,
      handleColorStain,
      handleMenuClick,
      handleInputChange,
      handleImage
    } = this.props;

    return (
            
      <li className="keyOptions">
      
        <section>
          <a 
            className="menuOptionsLink"
            href="#keyOptions"
            onClick={handleMenuClick}
          >
            <span>Keys</span>
            <i className="fas fa-caret-down"></i>
          </a>
        </section>
        
        {keyOptions ?
        
          <section className="expandedMenu">
          
            <label>Key Color:
              <input
                className="keyColor"
                name="keyColor"
                onChange={handleInputChange}
                type="color">
              </input>
            </label>
            
            <label>Stain:
              <input
                className="keyStain"
                min="0.1"
                max="1.0"
                step="0.1"
                name="keyColor"
                onChange={handleColorStain}
                type="number">
              </input>
            </label>
            
            <label className="keyImageInput"> Upload File
              <input 
                onChange={handleImage}
                name="keyImage" 
                type="file" 
                accept="image/*">
              </input>
            </label>
            
            <button 
              className="keyResetColor"
              name="keyResetColor"
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

export default KeyOptions;



