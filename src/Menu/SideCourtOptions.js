import React, { Component } from 'react';
import '../styles/App.scss';

class SideCourtOptions extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {};
      
    }
    
    componentDidMount() {
    }
  
  render() {

    const {
      handleImageReset,
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
        
          <form className="form-group">
          
            <label for="leftTopSideCourtImage" className="leftTopSideCourtImageInput"> Left Top Side Court</label>
            
            <input 
              onChange={handleImage}
              name="leftTopSideCourtImage" 
              type="file" 
              accept="image/*">
            </input>
            
            <button 
              className="leftTopSideCourtImageReset btn btn-danger"
              name="leftTopSideCourtImage"
              type="button"
              onClick={handleImageReset}
            >
              Reset
            </button>
          
          </form>
          
          <form className="form-group">
        
            <label for="leftBottomSideCourtImage" className="leftBottomSideCourtImageInput"> Left Bottom Side Court</label>
            
            <input 
              onChange={handleImage}
              name="leftBottomSideCourtImage" 
              type="file" 
              accept="image/*">
            </input>
            
            <button 
              className="leftBottomSideCourtImageReset btn btn-danger"
              name="leftBottomSideCourtImage"
              type="button"
              onClick={handleImageReset}
            >
              Reset
            </button>
            
          </form>
          
          <form className="form-group">
        
            <label for="rightTopSideCourtImage" className="rightTopSideCourtImageInput"> Right Top Side Court</label>
            
            <input 
              onChange={handleImage}
              name="rightTopSideCourtImage" 
              type="file" 
              accept="image/*">
            </input>
            
            <button 
              className="rightTopSideCourtImageReset btn btn-danger"
              name="rightTopSideCourtImage"
              type="button"
              onClick={handleImageReset}
            >
              Reset
            </button>
            
          </form>
          
          <form className="form-group">
        
            <label for="rightBottomSideCourtImage" className="rightBottomSideCourtImageInput"> Right Bottom Side Court</label>
            
            <input 
              onChange={handleImage}
              name="rightBottomSideCourtImage" 
              type="file" 
              accept="image/*">
            </input>
            
            <button 
              className="rightBottomSideCourtImageReset btn btn-danger"
              name="rightBottomSideCourtImage"
              type="button"
              onClick={handleImageReset}
            >
              Reset
            </button>
          
          </form>
          
        </section>
        
        : null}
        
      </li>

    );
  }
}

export default SideCourtOptions;



