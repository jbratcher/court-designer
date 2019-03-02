import React, { Component } from 'react';
import './App.scss';

class Menu extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {
        centerCircleOptions: false
      };
      
    }
    
    componentDidMount() {
        console.log(this.props);
    }
    
    handleClick = e => {
      console.log(e.target.parentElement.parentElement.className);
      let menuElementClass = e.target.parentElement.parentElement.className;
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
      centerCircleOptions
    } = this.state;

    return (

    <section className="menuContainer">
    
        <section className="newMenu">
        
          <nav className="newNav">
            
            <ul className="newMenuNavList">
            
              <li className="centerCircleOptions">
                <span>Center Circle</span>
                <a 
                  className="menuOptionsLink"
                  href="#centerCircleOptions"
                  onClick={this.handleClick}
                >
                  <i className="fas fa-caret-down"></i>
                </a>
                
                {centerCircleOptions ?
                
                  <section>Expanded Menu</section>
                
                : null}
                
              </li>
              <li className="borderOptions">
                <span>Border</span>
                <a href="#borderOptions"><i className="fas fa-caret-down"></i></a>
              </li>
              <li className="gamelineOptions">
                <span>Game lines</span>
                <a href="#gamelineOptions"><i className="fas fa-caret-down"></i></a>
              </li>
              <li className="threePointOptions">
                <span>3 Point Area</span>
                <a href="#threePointOptions"><i className="fas fa-caret-down"></i></a>
              </li>
              <li className="keyOptions">
                <span>Keys</span>
                <a href="#keyOptions"><i className="fas fa-caret-down"></i></a>
              </li>
              <li className="laneOptions">
                <span>Lanes</span>
                <a href="#laneOptions"><i className="fas fa-caret-down"></i></a>
              </li>
              <li className="sideCourtOptions">
                <span>Side Courts</span>
                <a href="#sideCourtOptions"><i className="fas fa-caret-down"></i></a>
              </li>
              
            </ul>
            
          </nav>
        
        </section>

        <section className="menu">

          <nav className="menuNav">

            <ul className="menuNavList">

              <li className="menuNavListItem">

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

              </li>

              <li className="menuNavListItem">

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

              </li>

              <li className="menuNavListItem">

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

              </li>

              <li className="menuNavListItem">

                <label>Main Gameline:
                  <input
                    className="mainGameLineColor"
                    name="mainGameLineColor"
                    onChange={handleInputChange}
                    type="color">
                  </input>
                </label>

              </li>

            </ul>

            <ul className="menuNavList">

              <li className="menuNavListItem">

                <label>Left End Border Lettering:
                  <input
                    className="leftEndBorderText"
                    name="leftEndBorderText"
                    onChange={handleInputChange}
                    type="text">
                  </input>
                </label>

              </li>

              <li className="menuNavListItem">

                <label>Right End Border Lettering:
                  <input
                    className="rightEndBorderText"
                    name="rightEndBorderText"
                    onChange={handleInputChange}
                    type="text">
                  </input>
                </label>

              </li>

              <li className="menuNavListItem">

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
                
                <button 
                  className="endBorderTextResetColor"
                  name="endBorderTextResetColor"
                  type="button"
                  onClick={handleColorReset}
                >
                  Reset
                </button>

              </li>

              <li className="menuNavListItem">

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

              </li>
              
              <li className="menuNavListItem">

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

              </li>
              
              <li className="menuNavListItem">

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

              </li>
              
              <li className="menuNavListItem">

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

              </li>
              
              <li className="menuNavListItem">

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

              </li>

            </ul>
            
            <ul className="menuNavList">
            
              <li className="menuNavListItem">

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
                
                <button 
                  className="centerCirlceResetColor"
                  name="centerCirlceResetColor"
                  type="button"
                  onClick={handleColorReset}
                >
                  Reset
                </button>
                
                <label className="centerCirlceImageInput"> Upload File
                  <input 
                    onChange={handleImage}
                    name="centerCirlceImage" 
                    type="file" 
                    accept="image/*">
                  </input>
                </label>

              </li>
              
              <li className="menuNavListItem">
              
                <label className="leftTopSideCourtImageInput"> Left Top Side Court (Upload File)
                  <input 
                    onChange={handleImage}
                    name="leftTopSideCourtImage" 
                    type="file" 
                    accept="image/*">
                  </input>
                </label>
              
              </li>
              
              <li className="menuNavListItem">
              
                <label className="leftBottomSideCourtImageInput"> Left Bottom Side Court (Upload File)
                  <input 
                    onChange={handleImage}
                    name="leftBottomSideCourtImage" 
                    type="file" 
                    accept="image/*">
                  </input>
                </label>
              
              </li>
              
              <li className="menuNavListItem">
              
                <label className="rightTopSideCourtImageInput"> Right Top Side Court (Upload File)
                  <input 
                    onChange={handleImage}
                    name="rightTopSideCourtImage" 
                    type="file" 
                    accept="image/*">
                  </input>
                </label>
              
              </li>
              
              <li className="menuNavListItem">
              
                <label className="rightBottomSideCourtImageInput"> Right Bottom Side Court (Upload File)
                  <input 
                    onChange={handleImage}
                    name="rightBottomSideCourtImage" 
                    type="file" 
                    accept="image/*">
                  </input>
                </label>
              
              </li>
            
            </ul>
            
            <ul className="menuNavList">
            
              <li className="menuNavListItem">

                <label>Volleyball Line Color:
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

              </li>
            
            </ul>

          </nav>

        </section>
        
    </section>

    );
  }
}

export default Menu;
