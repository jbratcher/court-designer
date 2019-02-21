import React, { Component } from 'react';
import Court from './Court';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      borderColor: "black",
      borderColorOpacity: 1,
      borderEndSize: 0,
      borderSideSize: 0,
      centerCircleColor: "#DFBB85",
      centerCircleColorOpacity: 1,
      endBorderLetterSpacing: 0,
      endBorderTextColor: "white",
      endBorderTextSize: 48,
      laneColor: "#DFBB85",
      laneColorOpacity: 1,
      leftEndBorderText: "",
      keyColor: "#DFBB85",
      keyColorOpacity: 1,
      rightEndBorderText: "",
      mainGameLineColor: "black",
      threePointAreaColor: "#DFBB85",
      threePointAreaColorOpacity: 1,
      volleyballLineColor: "white",
      volleyballShown: false
    };
  }

  componentDidMount() {
    console.log(this.hexToRgb(this.state.borderColor));
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  handleColorReset = e => {
    let propertyNameColor = e.target.parentElement.firstElementChild.firstElementChild.name;
    let propertyNameOpacity = `${e.target.parentElement.firstElementChild.firstElementChild.name}Opacity`;
    this.setState({
      [propertyNameColor]: "#DFBB85",
      [propertyNameOpacity]: 1
    });
  }
  
  handleColorStain = e => {
    let property = `${e.target.parentElement.firstElementChild.name}Opacity`;
    this.setState({
      [property]: e.target.value
    });
  }
  
  handleShow = e => {
    this.setState({
      volleyballShown: !this.state.volleyballShown
    });
  }
  
  hexToRgb = (hex) => {
    let combinedInt = parseInt(hex, 16);
    let r = (combinedInt >> 16) & 255;
    let g = (combinedInt >> 8) & 255;
    let b = combinedInt & 255;

    return r + "," + g + "," + b + ",1";
  }

  render() {

    const {
      borderColor,
      borderColorOpacity,
      borderEndSize,
      borderSideSize,
      centerCircleColor,
      centerCircleColorOpacity,
      endBorderLetterSpacing,
      endBorderTextColor,
      endBorderTextSize,
      laneColor,
      laneColorOpacity,
      leftEndBorderText,
      keyColor,
      keyColorOpacity,
      mainGameLineColor,
      rightEndBorderText,
      threePointAreaColor,
      threePointAreaColorOpacity,
      volleyballLineColor,
      volleyballShown
    } = this.state;


    return (

      <section className="appContainer">

        <header className="header">

          <h1 className="title">
            Court Designer
          </h1>

          <p className="headline">
            Design your own basketball court
          </p>

        </header>

        <section className="menu">

          <nav className="menuNav">

            <ul className="menuNavList">

              <li className="menuNavListItem">

                <label>Border Color:
                  <input
                    className="borderColor"
                    name="borderColor"
                    onChange={this.handleInputChange}
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
                    onChange={this.handleColorStain}
                    type="number">
                  </input>
                </label>
                
                <button 
                  className="borderResetColor"
                  name="borderResetColor"
                  type="button"
                  onClick={this.handleColorReset}
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
                    onChange={this.handleInputChange}
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
                    onChange={this.handleInputChange}
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
                    onChange={this.handleInputChange}
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
                    onChange={this.handleInputChange}
                    type="text">
                  </input>
                </label>

              </li>

              <li className="menuNavListItem">

                <label>Right End Border Lettering:
                  <input
                    className="rightEndBorderText"
                    name="rightEndBorderText"
                    onChange={this.handleInputChange}
                    type="text">
                  </input>
                </label>

              </li>

              <li className="menuNavListItem">

                <label>End Border Text Color:
                  <input
                    className="endBorderTextColor"
                    name="endBorderTextColor"
                    onChange={this.handleInputChange}
                    type="color">
                  </input>
                </label>

              </li>

              <li className="menuNavListItem">

                <label>End Border Text Size:
                  <input
                    className="endBorderTextSize"
                    min="12"
                    max="60"
                    name="endBorderTextSize"
                    onChange={this.handleInputChange}
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
                    onChange={this.handleInputChange}
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
                    onChange={this.handleInputChange}
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
                    onChange={this.handleColorStain}
                    type="number">
                  </input>
                </label>
                
                <button 
                  className="laneResetColor"
                  name="laneResetColor"
                  type="button"
                  onClick={this.handleColorReset}
                >
                  Reset
                </button>

              </li>
              
              <li className="menuNavListItem">

                <label>Key Color:
                  <input
                    className="keyColor"
                    name="keyColor"
                    onChange={this.handleInputChange}
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
                    onChange={this.handleColorStain}
                    type="number">
                  </input>
                </label>
                
                <button 
                  className="keyResetColor"
                  name="keyResetColor"
                  type="button"
                  onClick={this.handleColorReset}
                >
                  Reset
                </button>

              </li>
              
              <li className="menuNavListItem">

                <label>3 Point Area Color:
                  <input
                    className="threePointAreaColor"
                    name="threePointAreaColor"
                    onChange={this.handleInputChange}
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
                    onChange={this.handleColorStain}
                    type="number">
                  </input>
                </label>
                
                <button 
                  className="threePointAreaResetColor"
                  name="threePointAreaResetColor"
                  type="button"
                  onClick={this.handleColorReset}
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
                    onChange={this.handleInputChange}
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
                    onChange={this.handleColorStain}
                    type="number">
                  </input>
                </label>
                
                <button 
                  className="centerCirlceResetColor"
                  name="centerCirlceResetColor"
                  type="button"
                  onClick={this.handleColorReset}
                >
                  Reset
                </button>

              </li>
            
            </ul>
            
            <ul className="menuNavList">
            
              <li className="menuNavListItem">

                <label>Volleyball Line Color:
                  <input
                    className="volleyballLineColor"
                    name="volleyballLineColor"
                    onChange={this.handleInputChange}
                    type="color">
                  </input>
                </label>
                
                <label>Show
                  <input 
                    className="volleyballShown"
                    type="checkbox"
                    onChange={this.handleShow}
                  >
                  </input>
                </label>

              </li>
            
            </ul>

          </nav>

        </section>

        <Court
          borderColor={borderColor}
          borderColorOpacity={borderColorOpacity}
          borderEndSize={borderEndSize}
          borderSideSize={borderSideSize}
          centerCircleColor={centerCircleColor}
          centerCircleColorOpacity={centerCircleColorOpacity}
          endBorderLetterSpacing={endBorderLetterSpacing}
          endBorderTextColor={endBorderTextColor}
          endBorderTextSize={endBorderTextSize}
          laneColor={laneColor}
          laneColorOpacity={laneColorOpacity}
          leftEndBorderText={leftEndBorderText}
          keyColor={keyColor}
          keyColorOpacity={keyColorOpacity}
          mainGameLineColor={mainGameLineColor}
          rightEndBorderText={rightEndBorderText}
          threePointAreaColor={threePointAreaColor}
          threePointAreaColorOpacity={threePointAreaColorOpacity}
          volleyballLineColor={volleyballLineColor}
          volleyballShown={volleyballShown}
        />

        <footer>

          <p>Court Designer 2019</p>
          <p>Built with React</p>
          <p>Powered by Github</p>

        </footer>

      </section>

    );
  }
}

export default App;
