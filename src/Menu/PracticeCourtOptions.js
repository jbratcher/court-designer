import React, { Component } from 'react';
import '../styles/App.scss';

class PracticeCourtOptions extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {};
      
    }
    
    componentDidMount() {
      console.log(this.props)
    }
  
  render() {

    const {
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

    );
  }
}

export default PracticeCourtOptions;



