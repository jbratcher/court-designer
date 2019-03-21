import React, { Component } from 'react';
import '../styles/App.scss';

class SideCourtOptions extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {};
      
    }
    
    componentDidMount() {
      console.log(this.props)
    }
  
  render() {

    const {
      handleImage,
      handleMenuClick,
      sideCourtOptions,
      sideCourtOptionsMenuIcon
    } = this.props;

    return (
            
      <li className="sideCourtOptions">
      
        <section>
          <a 
            className="menuOptionsLink"
            href="#sideCourtOptions"
            onClick={handleMenuClick}
          >
            <span>Side Courts</span>
            <i className={sideCourtOptionsMenuIcon}></i>
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

    );
  }
}

export default SideCourtOptions;



