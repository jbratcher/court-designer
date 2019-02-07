import React, { Component } from 'react';
import Court from './Court';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      borderColor: null
    }
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e.target.name);
    console.log(e.target.value);
  }

  render() {

    const {borderColor} = this.state;


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

        <section className="main">

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

              </ul>

            </nav>

          </section>

          <Court
            borderColor={borderColor}
          />

        </section>

        <footer></footer>

      </section>

    );
  }
}

export default App;
