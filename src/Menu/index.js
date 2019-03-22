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
        borderOptionsMenuIcon: "fas fa-caret-down",
        centerCircleOptions: false,
        centerCircleOptionsMenuIcon: "fas fa-caret-down",
        gamelineOptions: false,
        gamelineOptionsMenuIcon: "fas fa-caret-down",
        keyOptions: false,
        keyOptionsMenuIcon: "fas fa-caret-down",
        laneOptions: false,
        laneOptionsMenuIcon: "fas fa-caret-down",
        practiceCourtOptions: false,
        practiceCourtOptionsMenuIcon: "fas fa-caret-down",
        sideCourtOptions: false,
        sideCourtOptionsMenuIcon: "fas fa-caret-down",
        threePointOptions: false,
        threePointOptionsMenuIcon: "fas fa-caret-down",
      };
      
    }
    
    componentDidMount() {
      
    }
    
    // when caret is clicked to open/close menu
    handleMenuClick = e => {
      
      // set state key name to container classname (type + "options")
      let menuElementClass = e.target.parentElement.parentElement.parentElement.className;
      let menuElementIcon = `${menuElementClass}MenuIcon`;
      
      // toggle state boolean tied to conditional rendering of menu options
      this.setState(prevState => ({
        [menuElementClass]: !prevState[menuElementClass],
      }));
      
      // toggle menu icon up/down
      if(this.state[menuElementIcon] === "fas fa-caret-down") {
        this.setState({
          [menuElementIcon]: "fas fa-caret-up"
        });
      } else if(this.state[menuElementIcon] === "fas fa-caret-up") {
        this.setState({
          [menuElementIcon]: "fas fa-caret-down"
        });
      }
    }
    
    
  render() {
    
    const {
      handleColorReset,
      handleColorStain,
      handleImage,
      handleImageReset,
      handleInputChange,
      handleShow
    } = this.props;
    
    const {
      borderOptions,
      borderOptionsMenuIcon,
      centerCircleOptions,
      centerCircleOptionsMenuIcon,
      gamelineOptions,
      gamelineOptionsMenuIcon,
      keyOptions,
      keyOptionsMenuIcon,
      laneOptions,
      laneOptionsMenuIcon,
      practiceCourtOptions,
      practiceCourtOptionsMenuIcon,
      sideCourtOptions,
      sideCourtOptionsMenuIcon,
      threePointOptions,
      threePointOptionsMenuIcon
    } = this.state;

    return (

      <section className="menuContainer">
      
        <section className="menu">
        
          <nav className="nav">
            
            <ul className="menuNavList">
            
              <CenterCircleOptions 
                centerCircleOptions={centerCircleOptions}
                centerCircleOptionsMenuIcon={centerCircleOptionsMenuIcon}
                handleColorReset={handleColorReset}
                handleColorStain={handleColorStain}
                handleMenuClick={this.handleMenuClick}
                handleImage={handleImage}
                handleInputChange={handleInputChange}
              />
              
              <BorderOptions 
                borderOptions={borderOptions}
                borderOptionsMenuIcon={borderOptionsMenuIcon}
                handleColorReset={handleColorReset}
                handleColorStain={handleColorStain}
                handleMenuClick={this.handleMenuClick}
                handleInputChange={handleInputChange}
              />
              
              <GamelineOptions 
                gamelineOptions={gamelineOptions}
                gamelineOptionsMenuIcon={gamelineOptionsMenuIcon}
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
                threePointOptionsMenuIcon={threePointOptionsMenuIcon}
              />
              
              <KeyOptions 
                handleColorReset={handleColorReset}
                handleColorStain={handleColorStain}
                handleMenuClick={this.handleMenuClick}
                handleImage={handleImage}
                handleInputChange={handleInputChange}
                keyOptions={keyOptions}
                keyOptionsMenuIcon={keyOptionsMenuIcon}
              />
              
              <LaneOptions 
                handleColorReset={handleColorReset}
                handleColorStain={handleColorStain}
                handleMenuClick={this.handleMenuClick}
                handleImage={handleImage}
                handleInputChange={handleInputChange}
                laneOptions={laneOptions}
                laneOptionsMenuIcon={laneOptionsMenuIcon}
              />
              
              <SideCourtOptions 
                handleImage={handleImage}
                handleImageReset={handleImageReset}
                handleMenuClick={this.handleMenuClick}
                sideCourtOptions={sideCourtOptions}
                sideCourtOptionsMenuIcon={sideCourtOptionsMenuIcon}
              />
              
              <PracticeCourtOptions 
                handleColorReset={handleColorReset}
                handleInputChange={handleInputChange}
                handleMenuClick={this.handleMenuClick}
                handleShow={handleShow}
                practiceCourtOptions={practiceCourtOptions}
                practiceCourtOptionsMenuIcon={practiceCourtOptionsMenuIcon}
              />
          
            </ul>
            
          </nav>
        
        </section>
        
      </section>

    );
  }
}

export default Menu;
