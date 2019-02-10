import React, { Component } from 'react';
import './App.scss';

class Court extends Component {
  render() {

    const {
      borderColor,
      borderEndSize,
      borderSideSize,
      mainGameLineColor
    } = this.props;

    return (

      <section className="courtContainer center">

        <section className="gym center">

            <section
              className="courtBorderLine center"
              style={{
                borderColor: borderColor,
                borderTop: `${borderSideSize}rem solid ${borderColor}`,
                borderBottom: `${borderSideSize}rem solid ${borderColor}`,
                borderLeft: `${borderEndSize}rem solid ${borderColor}`,
                borderRight: `${borderEndSize}rem solid ${borderColor}`,
              }}
            >

              <section
                className="courtOuterGameLine center"
                style={{boxShadow: `inset 0 0 0 0.25rem ${mainGameLineColor}`}}
              >

                <section
                  className="courtFloor"
                >

                  {/* Left Court Area */}

                  <section
                    className="leftCourtArea center"
                    style={{
                      borderColor: mainGameLineColor,
                      width: `calc(378px + ${borderEndSize/2})`
                    }}
                  >

                    <section
                      className="leftLaneArea"
                      style={{borderColor: mainGameLineColor}}
                    >
                    
                      <ul className="leftLaneMarkingContainer">
                      
                        <li className="leftLaneTopMarkings"></li>
                        <li className="leftLaneTopMarkings"></li>
                        <li className="leftLaneTopMarkings"></li>
                        <li className="leftLaneTopMarkings"></li>
                        
                      </ul>
                      
                      <ul className="leftLaneMarkingContainer">
                      
                        <li className="leftLaneBottomMarkings"></li>
                        <li className="leftLaneBottomMarkings"></li>
                        <li className="leftLaneBottomMarkings"></li>
                        <li className="leftLaneBottomMarkings"></li>
                        
                      </ul>

                    </section>

                    <section
                      className="leftKeyArea"
                      style={{borderColor: mainGameLineColor}}
                    >

                    </section>

                    <section
                      className="leftThreePointArea"
                      style={{borderColor: mainGameLineColor}}
                    >

                    </section>

                  </section>

                  {/* Center Court Area */}

                  <section
                    className="centerCourtLine center"
                    style={{borderColor: mainGameLineColor}}
                  >

                    <section
                      className="centerCircle center"
                      style={{borderColor: mainGameLineColor}}
                    >

                    </section>

                  </section>

                  {/* Right Court Area */}

                  <section
                    className="rightCourtArea center"
                    style={{
                      borderColor: mainGameLineColor,
                      width: `calc(378px + ${borderEndSize/2})`
                    }}
                  >

                    <section
                      className="rightThreePointArea"
                      style={{borderColor: mainGameLineColor}}
                    >

                    </section>

                    <section
                      className="rightKeyArea"
                      style={{borderColor: mainGameLineColor}}
                    >

                    </section>

                    <section
                      className="rightLaneArea"
                      style={{borderColor: mainGameLineColor}}
                    >
                    
                      <ul className="rightLaneMarkingContainer">
                      
                        <li className="rightLaneTopMarkings"></li>
                        <li className="rightLaneTopMarkings"></li>
                        <li className="rightLaneTopMarkings"></li>
                        <li className="rightLaneTopMarkings"></li>
                        
                      </ul>
                      
                      <ul className="rightLaneMarkingContainer">
                      
                        <li className="rightLaneBottomMarkings"></li>
                        <li className="rightLaneBottomMarkings"></li>
                        <li className="rightLaneBottomMarkings"></li>
                        <li className="rightLaneBottomMarkings"></li>
                        
                      </ul>

                    </section>

                  </section>

                </section>

              </section>

            </section>

        </section>

      </section>

    );
  }
}

export default Court;
