import React, { Component } from 'react';
import '../styles/App.scss';

class BorderOptions extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {};
      
    }
    
    componentDidMount() {
    }
  
  render() {

    const {
      borderOptions,
      borderOptionsMenuIcon,
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
            <i className={borderOptionsMenuIcon}></i>
          </a>
        </section>
        
        {borderOptions ?
        
        <section className="expandedMenu input-group">
        
          <form className="form-group">
        
            <label className="input-group-text">Border Color:
              <input
                className="borderColor"
                name="borderColor"
                onChange={handleInputChange}
                type="color">
              </input>
            </label>
            
            <label className="input-group-text">Stain:
              <input
                className="borderColorOpacity form-control"
                min="0.1"
                max="1.0"
                step="0.1"
                name="borderColor"
                onChange={handleColorStain}
                type="number">
              </input>
            </label>
            
            <button 
              className="borderResetColor btn btn-danger"
              name="borderResetColor"
              type="button"
              onClick={handleColorReset}
            >
              Reset
            </button>
          
          </form>
          
          <form className="form-group">
          
            <label className="input-group-text">End Border Size:
              <input
                className="borderEndSize form-control"
                min="0"
                max="120"
                name="borderEndSize"
                onChange={handleInputChange}
                type="number">
              </input>
               (inches)
            </label>
            
            <label className="input-group-text">Side Border Size:
              <input
                className="borderSideSize form-control"
                min="0"
                max="72"
                name="borderSideSize"
                onChange={handleInputChange}
                type="number">
              </input>
              (inches)
            </label>
            
            <label className="input-group-text">Left End Border Lettering:
              <input
                className="leftEndBorderText form-control"
                name="leftEndBorderText"
                onChange={handleInputChange}
                type="text">
              </input>
            </label>
            
            <label className="input-group-text">Right End Border Lettering:
              <input
                className="rightEndBorderText form-control"
                name="rightEndBorderText"
                onChange={handleInputChange}
                type="text">
              </input>
            </label>
            
            <label className="input-group-text">End Border Text Color:
              <input
                className="endBorderTextColor"
                name="endBorderTextColor"
                onChange={handleInputChange}
                type="color">
              </input>
            </label>
            
            <label className="input-group-text">Stain:
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
            
            <label className="input-group-text">End Border Text Size:
              <input
                className="endBorderTextSize form-control"
                min="12"
                max="60"
                name="endBorderTextSize"
                onChange={handleInputChange}
                type="number">
              </input>
              (inches)
            </label>
  
            <label className="input-group-text">End Border Letter Spacing:
              <input
                className="endBorderLetterSpacing form-control"
                min="0"
                name="endBorderLetterSpacing"
                onChange={handleInputChange}
                type="number">
              </input>
              (inches)
            </label>
            
          </form>
        
        </section>
        
        : null}
        
      </li>

    );
  }
}

export default BorderOptions;
