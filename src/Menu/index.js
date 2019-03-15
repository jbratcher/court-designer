import React, { Component } from 'react';
import '../styles/App.scss';
import CenterCircleOptions from './CenterCircleOptions';
import BorderOptions from './BorderOptions';
import GamelineOptions from './GamelineOptions';
import ThreePointOptions from './ThreePointOptions';
import KeyOptions from './KeyOptions';
import LaneOptions from './LaneOptions'

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
    
    handleMenuClick = e => {
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
      practiceCourtOptions,
      sideCourtOptions,
      threePointOptions
    } = this.state;

    return (

    <section className="menuContainer">
    
        <section className="menu">
        
          <nav className="nav">
            
            <ul className="menuNavList">
            
              <CenterCircleOptions 
                centerCircleOptions={centerCircleOptions}
                handleColorReset={handleColorReset}
                handleColorStain={handleColorStain}
                handleMenuClick={this.handleMenuClick}
                handleImage={handleImage}
                handleInputChange={handleInputChange}
              />
              
              <BorderOptions 
                borderOptions={borderOptions}
                handleColorReset={handleColorReset}
                handleColorStain={handleColorStain}
                handleMenuClick={this.handleMenuClick}
                handleInputChange={handleInputChange}
              />
              
              <GamelineOptions 
                gamelineOptions={gamelineOptions}
                handleColorReset={handleColorReset}
                handleColorStain={handleColorStain}
                handleMenuClick={this.handleMenuClick}
                handleInputChange={handleInputChange}
              />
              
              <ThreePointOptions 
                threePointOptions={threePointOptions}
                handleColorReset={handleColorReset}
                handleColorStain={handleColorStain}
                handleMenuClick={this.handleMenuClick}
                handleInputChange={handleInputChange}
              />
              
              <KeyOptions 
                keyOptions={keyOptions}
                handleColorReset={handleColorReset}
                handleColorStain={handleColorStain}
                handleMenuClick={this.handleMenuClick}
                handleImage={handleImage}
                handleInputChange={handleInputChange}
              />
              
              <LaneOptions 
                laneOptions={laneOptions}
                handleColorReset={handleColorReset}
                handleColorStain={handleColorStain}
                handleMenuClick={this.handleMenuClick}
                handleImage={handleImage}
                handleInputChange={handleInputChange}
              />
              
              <li className="sideCourtOptions">
                <section>
                  <span>Side Courts</span>
                  <a 
                    className="menuOptionsLink"
                    href="#sideCourtOptions"
                    onClick={this.handleMenuClick}
                  >
                    <i className="fas fa-caret-down"></i>
                  </a>
                </section>
                
                {sideCourtOptions ?
                
                <section className="expandedMenu" id="sideCourtMenu">
                
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
                
                </section>
                
                : null}
                
              </li>
              
              <li className="practiceCourtOptions">
              
                <section>
                  <span>Practice Courts</span>
                  <a 
                    className="menuOptionsLink"
                    href="#practiceCourtOptions"
                    onClick={this.handleMenuClick}
                  >
                    <i className="fas fa-caret-down"></i>
                  </a>
                </section>
                
                {practiceCourtOptions ?
                
                  <section className="expandedMenu" id="practiceCourtMenu">
                  
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
