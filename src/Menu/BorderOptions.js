import React, { Component } from 'react';
import '../styles/App.scss';

class BorderOptions extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {};
      
    }
    
    componentDidMount() {
      console.log(this.props)
    }
  
  render() {

    const {
      borderOptions,
      handleColorReset,
      handleColorStain,
      handleMenuClick,
      handleInputChange
    } = this.props;

    return (
            
      <li className="borderOptions">
              
        <section>
          <a 
            className="menuOptionsLink"
            href="#borderOptions"
            onClick={handleMenuClick}
          >
            <span>Border</span>
            <i className="fas fa-caret-down"></i>
          </a>
        </section>
        
        {borderOptions ?
        
        <section className="expandedMenu">
        
          <label>Border Color:
            <input
              className="borderColor"
              name="borderColor"
              onChange={handleInputChange}
              type="color">
            </input>
          </label>
          
          <label>Stain:
            <input
              className="borderColorOpacity"
              min="0.1"
              max="1.0"
              step="0.1"
              name="borderColor"
              onChange={handleColorStain}
              type="number">
            </input>
          </label>
          
          <button 
            className="borderResetColor"
            name="borderResetColor"
            type="button"
            onClick={handleColorReset}
          >
            Reset
          </button>
          
          <label>End Border Size:
            <input
              className="borderEndSize"
              min="0"
              max="120"
              name="borderEndSize"
              onChange={handleInputChange}
              type="number">
            </input>
             (inches)
          </label>
          
          <label>Side Border Size:
            <input
              className="borderSideSize"
              min="0"
              max="72"
              name="borderSideSize"
              onChange={handleInputChange}
              type="number">
            </input>
            (inches)
          </label>
          
          <label>Left End Border Lettering:
            <input
              className="leftEndBorderText"
              name="leftEndBorderText"
              onChange={handleInputChange}
              type="text">
            </input>
          </label>
          
          <label>Right End Border Lettering:
            <input
              className="rightEndBorderText"
              name="rightEndBorderText"
              onChange={handleInputChange}
              type="text">
            </input>
          </label>
          
          <label>End Border Text Color:
            <input
              className="endBorderTextColor"
              name="endBorderTextColor"
              onChange={handleInputChange}
              type="color">
            </input>
          </label>
          
          <label>Stain:
            <input
              className="endBorderTextColorOpacity"
              min="0.1"
              max="1.0"
              step="0.1"
              name="endBorderTextColor"
              onChange={handleColorStain}
              type="number">
            </input>
          </label>
          
          <label>End Border Text Size:
            <input
              className="endBorderTextSize"
              min="12"
              max="60"
              name="endBorderTextSize"
              onChange={handleInputChange}
              type="number">
            </input>
            (inches)
          </label>

          <label>End Border Letter Spacing:
            <input
              className="endBorderLetterSpacing"
              min="0"
              name="endBorderLetterSpacing"
              onChange={handleInputChange}
              type="number">
            </input>
            (inches)
          </label>
        
        </section>
        
        : null}
        
      </li>

    );
  }
}

export default BorderOptions;
