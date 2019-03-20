import React, { Component } from 'react';
import '../styles/App.scss';
import CenterCircleOptions from './CenterCircleOptions';
import BorderOptions from './BorderOptions';
import GamelineOptions from './GamelineOptions';
import ThreePointOptions from './ThreePointOptions';
import KeyOptions from './KeyOptions';
import LaneOptions from './LaneOptions';
import SideCourtOptions from './SideCourtOptions';
import PracticeCourtOptions from './PracticeCourtOptions';

class Menu extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {
        borderOptions: false,
        centerCircleOptions: false,
        gamelineOptions: false,
        keyOptions: false,
        laneOptions: false,
        menuIcon: "fas fa-caret-down",
        sideCourtOptions: false,
        threePointOptions: false
      };
      
    }
    
    componentDidMount() {
        console.log(this.props);
    }
    
    // when caret is clicked to open/close menu
    handleMenuClick = e => {
      
      // set state key name to container classname (type + "options")
      let menuElementClass = e.target.parentElement.parentElement.parentElement.className;
      console.log(e.target.querySelector("i"));
      // toggle state boolean tied to conditional rendering of menu options
      this.setState(prevState => ({
        [menuElementClass]: !prevState[menuElementClass],
      }));
      
      // toggle menu icon up/down
      if(this.state.menuIcon === "fas fa-caret-down") {
        this.setState({
          menuIcon: "fas fa-caret-up"
        });
      } else if(this.state.menuIcon === "fas fa-caret-up") {
        this.setState({
          menuIcon: "fas fa-caret-down"
        });
      }
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
      menuIcon,
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
                menuIcon={menuIcon}
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
                handleMenuClick={this.handleMenuClick}
                handleInputChange={handleInputChange}
              />
              
              <ThreePointOptions 
                handleColorReset={handleColorReset}
                handleColorStain={handleColorStain}
                handleMenuClick={this.handleMenuClick}
                handleInputChange={handleInputChange}
                threePointOptions={threePointOptions}
              />
              
              <KeyOptions 
                handleColorReset={handleColorReset}
                handleColorStain={handleColorStain}
                handleMenuClick={this.handleMenuClick}
                handleImage={handleImage}
                handleInputChange={handleInputChange}
                keyOptions={keyOptions}
              />
              
              <LaneOptions 
                handleColorReset={handleColorReset}
                handleColorStain={handleColorStain}
                handleMenuClick={this.handleMenuClick}
                handleImage={handleImage}
                handleInputChange={handleInputChange}
                laneOptions={laneOptions}
              />
              
              <SideCourtOptions 
                handleImage={handleImage}
                handleMenuClick={this.handleMenuClick}
                sideCourtOptions={sideCourtOptions}
              />
              
              <PracticeCourtOptions 
                handleInputChange={handleInputChange}
                handleMenuClick={this.handleMenuClick}
                handleShow={handleShow}
                practiceCourtOptions={practiceCourtOptions}
              />
          
            </ul>
            
          </nav>
        
        </section>
        
      </section>

    );
  }
}

export default Menu;
