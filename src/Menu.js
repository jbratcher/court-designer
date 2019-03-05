import React, { Component } from 'react';
import './App.scss';

class Menu extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {
        borderOptions: false,
        centerCircleOptions: false,
        gamelineOptions: false,
        keyOptions: false,
        laneOptions: false,
        sideCourtOptions: false,
        threePointOptions: false
      };
      
    }
    
    componentDidMount() {
        console.log(this.props);
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
      handleInputChange,
      handleShow
        
    } = this.props;
    
    const {
      borderOptions,
      centerCircleOptions,
      gamelineOptions,
      keyOptions,
      laneOptions,
      sideCourtOptions,
      threePointOptions
    } = this.state;

    return (

    <section className="menuContainer">
    
        <section className="menu">
        
          <nav className="nav">
            
            <ul className="menuNavList">
            
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
              
              <li className="borderOptions">
              
                <section>
                  <span>Border</span>
                  <a 
                    className="menuOptionsLink"
                    href="#borderOptions"
                    onClick={this.handleClick}
                  >
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
              
              <li className="gamelineOptions">
              
                <section>
                  <span>Game lines</span>
                  <a 
                    className="menuOptionsLink"
                    href="#gamelineOptions"
                    onClick={this.handleClick}
                  >
                    <i className="fas fa-caret-down"></i>
                  </a>
                </section>
                
                {gamelineOptions ?
                
                  <section className="expandedMenu">
                  
                    <label>Main Gameline:
                      <input
                        className="mainGameLineColor"
                        name="mainGameLineColor"
                        onChange={handleInputChange}
                        type="color">
                      </input>
                    </label>
                    
                    <label>Stain:
                      <input
                        className="mainGamelineStain"
                        min="0.1"
                        max="1.0"
                        step="0.1"
                        name="mainGameLineColor"
                        onChange={handleColorStain}
                        type="number">
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
              <li className="threePointOptions">
                <section>
                  <span>3 Point Area</span>
                  <a 
                    className="menuOptionsLink"
                    href="#threePointOptions"
                    onClick={this.handleClick}
                  >
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
              <li className="keyOptions">
                <section>
                  <span>Keys</span>
                  <a 
                    className="menuOptionsLink"
                    href="#keyOptions"
                    onClick={this.handleClick}
                  >
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
              <li className="laneOptions">
                <section>
                  <span>Lanes</span>
                  <a 
                    className="menuOptionsLink"
                    href="#laneOptions"
                    onClick={this.handleClick}
                  >
                    <i className="fas fa-caret-down"></i>
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
              <li className="sideCourtOptions">
                <section>
                  <span>Side Courts</span>
                  <a 
                    className="menuOptionsLink"
                    href="#sideCourtOptions"
                    onClick={this.handleClick}
                  >
                    <i className="fas fa-caret-down"></i>
                  </a>
                </section>
                
                {sideCourtOptions ?
                
                <section className="expandedMenu">
                
                  <label className="leftTopSideCourtImageInput"> Left Top Side Court
                    <input 
                      onChange={handleImage}
                      name="leftTopSideCourtImage" 
                      type="file" 
                      accept="image/*">
                    </input>
                  </label>
                
                  <label className="leftBottomSideCourtImageInput"> Left Bottom Side Court
                    <input 
                      onChange={handleImage}
                      name="leftBottomSideCourtImage" 
                      type="file" 
                      accept="image/*">
                    </input>
                  </label>
                
                  <label className="rightTopSideCourtImageInput"> Right Top Side Court
                    <input 
                      onChange={handleImage}
                      name="rightTopSideCourtImage" 
                      type="file" 
                      accept="image/*">
                    </input>
                  </label>
                
                
                  <label className="rightBottomSideCourtImageInput"> Right Bottom Side Court
                    <input 
                      onChange={handleImage}
                      name="rightBottomSideCourtImage" 
                      type="file" 
                      accept="image/*">
                    </input>
                  </label>
                  
                  <label class="volleyballSideCourt">Volleyball Line Color:
                    <input
                      className="volleyballLineColor"
                      name="volleyballLineColor"
                      onChange={handleInputChange}
                      type="color">
                    </input>
                  </label>
                  
                  <label>Show
                    <input 
                      className="volleyballShown"
                      type="checkbox"
                      onChange={handleShow}
                    >
                    </input>
                  </label>
                
                </section>
                
                : null}
                
              </li>
              
            </ul>
            
          </nav>
        
        </section>
        
    </section>

    );
  }
}

export default Menu;
