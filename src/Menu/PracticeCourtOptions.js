import React, { Component } from 'react';
import '../styles/App.scss';

class PracticeCourtOptions extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {};
      
    }
    
    componentDidMount() {
    }
  
  render() {

    const {
      handleColorReset,
      handleInputChange,
      handleMenuClick,
      handleShow,
      practiceCourtOptions,
      practiceCourtOptionsMenuIcon
    } = this.props;

    return (
            
      <li className="practiceCourtOptions">
              
        <section>
          <a 
            className="menuOptionsLink"
            href="#practiceCourtOptions"
            onClick={handleMenuClick}
          >
            <span>Practice Courts</span>
            <i className={practiceCourtOptionsMenuIcon}></i>
          </a>
        </section>
        
        {practiceCourtOptions ?
        
        <section className="expandedMenu input-group" id="practiceCourtMenu">
        
          <form className="form-group">
          
            <label className="volleyballSideCourt input-group-text">Volleyball Line Color:
              <input
                className="volleyballLineColor"
                name="volleyballLineColor"
                onChange={handleInputChange}
                type="color">
              </input>
            </label>
            
            <label>Show
              <input 
                className="volleyballShown form-control"
                type="checkbox"
                onChange={handleShow}
              >
              </input>
            </label>
            
            <button 
              className="volleyballLineResetColor btn btn-danger"
              name="volleyballLineColor"
              type="button"
              onClick={handleColorReset}
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

export default PracticeCourtOptions;



