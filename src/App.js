import React, { Component } from 'react';
import Court from './Court';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      borderColor: "#B71C1C",
      borderEndSize: 4,
      borderSideSize: 2,
      leftEndBorderText: "",
      rightEndBorderText: "",
      mainGameLineColor: "black"
    };
  }

  componentDidMount() {

  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
    console.log(e.target.value);
  }

  render() {

    const {
      borderColor,
      borderEndSize,
      borderSideSize,
      leftEndBorderText,
      mainGameLineColor,
      rightEndBorderText
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
                    max="10"
                    name="borderEndSize"
                    onChange={this.handleInputChange}
                    type="number">
                  </input>
                </label>

              </li>

              <li className="menuNavListItem">

                <label>Side Border Size:
                  <input
                    className="borderSideSize"
                    min="0"
                    max="10"
                    name="borderSideSize"
                    onChange={this.handleInputChange}
                    type="number">
                  </input>
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

            </ul>

          </nav>

        </section>

        <Court
          borderColor={borderColor}
          borderEndSize={borderEndSize}
          borderSideSize={borderSideSize}
          leftEndBorderText={leftEndBorderText}
          mainGameLineColor={mainGameLineColor}
          rightEndBorderText={rightEndBorderText}
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
