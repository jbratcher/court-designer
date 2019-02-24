import React, { Component } from 'react';
import './App.scss';

class Court extends Component {
  render() {

    const {
      borderColor,
      borderColorOpacity,
      borderEndSize,
      borderSideSize,
      centerCircleColor,
      centerCircleColorOpacity,
      endBorderLetterSpacing,
      endBorderTextColor,
      endBorderTextColorOpacity,
      endBorderTextSize,
      keyColor,
      keyColorOpacity,
      laneColor,
      laneColorOpacity,
      leftEndBorderText,
      mainGameLineColor,
      rightEndBorderText,
      threePointAreaColor,
      threePointAreaColorOpacity,
      volleyballLineColor,
      volleyballShown
    } = this.props;

    return (

      <section className="courtContainer center">

        <section className="gym center">
        
          <section className="leftEndBorderLettering center">

            <span
              style={{
                color: endBorderTextColor,
                fontSize: `${endBorderTextSize}px`,
                letterSpacing: `${endBorderLetterSpacing}px`,
                opacity: endBorderTextColorOpacity
              }}
            >
              {leftEndBorderText}
            </span>

          </section>

          <section
            className="courtBorderLine center"
          >
            
            <section 
              className="courtBorderLineInner"
              style={{
                borderColor: borderColor,
                opacity: borderColorOpacity,
                borderTop: `${borderSideSize}px solid ${borderColor}`,
                borderBottom: `${borderSideSize}px solid ${borderColor}`,
                borderLeft: `${borderEndSize}px solid ${borderColor}`,
                borderRight: `${borderEndSize}px solid ${borderColor}`,
              }}
            >
            </section>

            <section
              className="courtOuterGameLine center"
              style={{boxShadow: `inset 0 0 0 0.25rem ${mainGameLineColor}`}}
            >

              <section
                className="courtFloor"
              >

                {/* Main Volleyball */}
                
                {volleyballShown ?
                
                <React.Fragment>

                  <section 
                    className="mainVolleyball"
                    style={{borderColor: volleyballLineColor}}
                  >
                  </section>
  
                  <section 
                    className="mainVolleyballAttackLines"
                    style={{borderColor: volleyballLineColor}}
                  >
                  </section>
  
                  <section 
                    className="mainVolleyballCenterLine"
                    style={{borderColor: volleyballLineColor}}
                  >
                  </section>
                
                </React.Fragment>
                
                : null}

                {/* Left Court Area */}

                <section
                  className="leftCourtArea center"
                  style={{
                    borderColor: mainGameLineColor,
                    width: `calc(378px + ${borderEndSize})`
                  }}
                >

                  <section
                    className="leftLaneArea"
                    style={{
                      borderColor: mainGameLineColor
                    }}
                  >
                    
                    <section 
                      className="leftLaneAreaInner"
                      style={{
                        backgroundColor: laneColor,
                        opacity: laneColorOpacity
                      }}
                      >
                    </section>

                    <ul className="leftLaneMarkingContainer">

                      <li
                        className="leftLaneTopMarkings"
                        style={{background: mainGameLineColor}}
                      ></li>
                      <li
                        className="leftLaneTopMarkings"
                        style={{background: mainGameLineColor}}
                      ></li>
                      <li
                        className="leftLaneTopMarkings"
                        style={{background: mainGameLineColor}}
                      ></li>
                      <li
                        className="leftLaneTopMarkings"
                        style={{background: mainGameLineColor}}
                      ></li>

                    </ul>

                    <ul className="leftLaneMarkingContainer">

                      <li
                        className="leftLaneBottomMarkings"
                        style={{background: mainGameLineColor}}
                      ></li>
                      <li
                        className="leftLaneBottomMarkings"
                        style={{background: mainGameLineColor}}
                      ></li>
                      <li
                        className="leftLaneBottomMarkings"
                        style={{background: mainGameLineColor}}
                      ></li>
                      <li
                        className="leftLaneBottomMarkings"
                        style={{background: mainGameLineColor}}
                      ></li>

                    </ul>

                    <section className="leftGoalContainer">

                      <section className="leftGoalBackboard"></section>
                      <section className="leftGoalMount"></section>
                      <section className="leftGoalRim"></section>

                    </section>

                  </section>

                  <section
                    className="leftKeyArea"
                    style={{borderColor: mainGameLineColor}}
                  >
                  
                    <section 
                      className="leftKeyAreaInner"
                      style={{
                        backgroundColor: keyColor,
                        opacity: keyColorOpacity
                      }}
                    >
                    </section>
                  
                  </section>

                  <section
                    className="leftThreePointArea"
                    style={{borderColor: mainGameLineColor}}
                  >
                  
                    <section
                      className="leftThreePointAreaInner"
                      style={{
                        backgroundColor: threePointAreaColor,
                        opacity: threePointAreaColorOpacity
                      }}
                    >
                    </section>
                    
                  </section>

                </section>

                {/* Center Court Area */}

                <section
                  className="centerCourtLine center"
                  style={{background: mainGameLineColor}}
                >

                  <section
                    className="centerCircle center"
                    style={{
                      borderColor: mainGameLineColor
                    }}
                  >
                  
                    <section
                      className="centerCirlceInner"
                      style={{
                        background: centerCircleColor,
                        opacity: centerCircleColorOpacity
                      }}
                      >
                      </section>
                  
                  </section>

                </section>

                {/* Right Court Area */}

                <section
                  className="rightCourtArea center"
                  style={{
                    borderColor: mainGameLineColor,
                    width: `calc(378px + ${borderEndSize})`
                  }}
                >

                  <section
                    className="rightThreePointArea"
                    style={{borderColor: mainGameLineColor}}
                  >
                    
                    <section
                      className="rightThreePointAreaInner"
                      style={{
                        backgroundColor: threePointAreaColor,
                        opacity: threePointAreaColorOpacity
                      }}
                    >
                    </section>
                    
                  </section>

                  <section
                    className="rightKeyArea"
                    style={{borderColor: mainGameLineColor}}
                  >
                  
                    <section 
                      className="rightKeyAreaInner"
                      style={{
                        backgroundColor: keyColor,
                        opacity: keyColorOpacity
                      }}
                    >
                    </section>
                  
                  </section>

                  <section
                    className="rightLaneArea"
                    style={{
                      borderColor: mainGameLineColor
                    }}
                  >
                  
                    <section 
                      className="rightLaneAreaInner"
                      style={{
                        backgroundColor: laneColor,
                        opacity: laneColorOpacity
                      }}
                      >
                    </section>

                    <ul
                      className="rightLaneMarkingContainer"
                    >

                      <li
                        className="rightLaneTopMarkings"
                        style={{background: mainGameLineColor}}
                      ></li>
                      <li
                        className="rightLaneTopMarkings"
                        style={{background: mainGameLineColor}}
                      ></li>
                      <li
                        className="rightLaneTopMarkings"
                        style={{background: mainGameLineColor}}
                      ></li>
                      <li
                        className="rightLaneTopMarkings"
                        style={{background: mainGameLineColor}}
                      ></li>

                    </ul>

                    <ul className="rightLaneMarkingContainer">

                      <li
                        className="rightLaneBottomMarkings"
                        style={{background: mainGameLineColor}}
                      ></li>
                      <li
                        className="rightLaneBottomMarkings"
                        style={{background: mainGameLineColor}}
                      ></li>
                      <li
                        className="rightLaneBottomMarkings"
                        style={{background: mainGameLineColor}}
                      ></li>
                      <li
                        className="rightLaneBottomMarkings"
                        style={{background: mainGameLineColor}}
                      ></li>

                    </ul>

                    <section className="rightGoalContainer">

                      <section className="rightGoalRim"></section>
                      <section className="rightGoalMount"></section>
                      <section className="rightGoalBackboard"></section>

                    </section>

                  </section>

                </section>

              </section>

            </section>

          </section>

          <section className="rightEndBorderLettering center">

            <span
              style={{
                color: endBorderTextColor,
                fontSize: `${endBorderTextSize}px`,
                letterSpacing: `${endBorderLetterSpacing}px`,
                opacity: endBorderTextColorOpacity
              }}
            >
              {rightEndBorderText}
            </span>

          </section>

        </section>

      </section>

    );
  }
}

export default Court;
