import React, { Component } from 'react';
import Court from './Court';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      borderColor: "black",
      borderEndSize: 0,
      borderSideSize: 0,
      centerCircleBgColor: "transparent",
      endBorderLetterSpacing: 0,
      endBorderTextColor: "white",
      endBorderTextSize: 48,
      laneColor: "transparent",
      leftEndBorderText: "",
      keyColor: "transparent",
      rightEndBorderText: "",
      mainGameLineColor: "black",
      volleyballLineColor: "white",
      volleyballShown: true
    };
  }

  componentDidMount() {

  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  handleColorReset = e => {
    this.setState({
      [e.target.previousSibling.firstElementChild.name]: "transparent"
    });
  }
  
  handleShow = e => {
    this.setState({
      volleyballShown: !this.state.volleyballShown
    });
  }

  render() {

    const {
      borderColor,
      borderEndSize,
      borderSideSize,
      centerCircleBgColor,
      endBorderLetterSpacing,
      endBorderTextColor,
      endBorderTextSize,
      laneColor,
      leftEndBorderText,
      keyColor,
      mainGameLineColor,
      rightEndBorderText,
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
                
                <button 
                  className="keyResetColor"
                  name="keyResetColor"
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
                    className="centerCircleBgColor"
                    name="centerCircleBgColor"
                    onChange={this.handleInputChange}
                    type="color">
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
          borderEndSize={borderEndSize}
          borderSideSize={borderSideSize}
          centerCircleBgColor={centerCircleBgColor}
          endBorderLetterSpacing={endBorderLetterSpacing}
          endBorderTextColor={endBorderTextColor}
          endBorderTextSize={endBorderTextSize}
          laneColor={laneColor}
          leftEndBorderText={leftEndBorderText}
          keyColor={keyColor}
          mainGameLineColor={mainGameLineColor}
          rightEndBorderText={rightEndBorderText}
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
