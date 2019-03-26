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
        
          <form className="form-group ml-2">
          
            <label for="leftTopSideCourtImage" className="leftTopSideCourtImageInput my-2"> Left Top Side Court</label>
            
            <input 
              className="my-2"
              onChange={handleImage}
              name="leftTopSideCourtImage" 
              type="file" 
              accept="image/*">
            </input>
            
            <button 
              className="leftTopSideCourtImageReset btn btn-danger my-2"
              name="leftTopSideCourtImage"
              type="button"
              onClick={handleImageReset}
            >
              Reset
            </button>
          
          </form>
          
          <form className="form-group ml-2">
        
            <label for="leftBottomSideCourtImage" className="leftBottomSideCourtImageInput my-2"> Left Bottom Side Court</label>
            
            <input 
              className="my-2"
              onChange={handleImage}
              name="leftBottomSideCourtImage" 
              type="file" 
              accept="image/*">
            </input>
            
            <button 
              className="leftBottomSideCourtImageReset btn btn-danger my-2"
              name="leftBottomSideCourtImage"
              type="button"
              onClick={handleImageReset}
            >
              Reset
            </button>
            
          </form>
          
          <form className="form-group ml-2">
        
            <label for="rightTopSideCourtImage" className="rightTopSideCourtImageInput my-2"> Right Top Side Court</label>
            
            <input 
              className="my-2"
              onChange={handleImage}
              name="rightTopSideCourtImage" 
              type="file" 
              accept="image/*">
            </input>
            
            <button 
              className="rightTopSideCourtImageReset btn btn-danger my-2"
              name="rightTopSideCourtImage"
              type="button"
              onClick={handleImageReset}
            >
              Reset
            </button>
            
          </form>
          
          <form className="form-group ml-2">
        
            <label for="rightBottomSideCourtImage" className="rightBottomSideCourtImageInput my-2"> Right Bottom Side Court</label>
            
            <input 
              className="my-2"
              onChange={handleImage}
              name="rightBottomSideCourtImage" 
              type="file" 
              accept="image/*">
            </input>
            
            <button 
              className="rightBottomSideCourtImageReset btn btn-danger my-2"
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



