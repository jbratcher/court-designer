import React, { Component } from 'react';
import '../styles/App.scss';

class Court extends Component {
  render() {

    const {
      borderColor,
      borderColorOpacity,
      borderEndSize,
      borderSideSize,
      centerCircleColor,
      centerCircleColorOpacity,
      centerCirlceImage,
      endBorderLetterSpacing,
      endBorderTextColor,
      endBorderTextColorOpacity,
      endBorderTextSize,
      keyColor,
      keyColorOpacity,
      keyImage,
      laneColor,
      laneColorOpacity,
      leftTopSideCourtImage,
      leftBottomSideCourtImage,
      leftEndBorderText,
      mainGamelineColor,
      mainGamelineColorOpacity,
      rightEndBorderText,
      rightTopSideCourtImage,
      rightBottomSideCourtImage,
      threePointAreaColor,
      threePointAreaColorOpacity,
      volleyballLineColor,
      volleyballShown
    } = this.props;

    return (

      <section className="courtContainer center">

        <section className="gym center">

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
              className="courtOuterGameLine center"
              style={{
                boxShadow: `inset 0 0 0 0.25rem ${mainGamelineColor}`,
                opacity: mainGamelineColorOpacity
              }}
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
                    borderColor: mainGamelineColor,
                    width: `calc(378px + ${borderEndSize})`
                  }}
                >

                  <section
                    className="leftLaneArea"
                    style={{
                      borderColor: mainGamelineColor
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
                        style={{background: mainGamelineColor}}
                      ></li>
                      <li
                        className="leftLaneTopMarkings"
                        style={{background: mainGamelineColor}}
                      ></li>
                      <li
                        className="leftLaneTopMarkings"
                        style={{background: mainGamelineColor}}
                      ></li>
                      <li
                        className="leftLaneTopMarkings"
                        style={{background: mainGamelineColor}}
                      ></li>

                    </ul>

                    <ul className="leftLaneMarkingContainer">

                      <li
                        className="leftLaneBottomMarkings"
                        style={{background: mainGamelineColor}}
                      ></li>
                      <li
                        className="leftLaneBottomMarkings"
                        style={{background: mainGamelineColor}}
                      ></li>
                      <li
                        className="leftLaneBottomMarkings"
                        style={{background: mainGamelineColor}}
                      ></li>
                      <li
                        className="leftLaneBottomMarkings"
                        style={{background: mainGamelineColor}}
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
                    style={{borderColor: mainGamelineColor}}
                  >

                  
                    <section 
                      className="leftKeyAreaInner"
                      style={{
                        backgroundColor: keyColor,
                        opacity: keyColorOpacity
                      }}
                    >
                    
                      { keyImage ?
                        <img
                          className="keyImage"
                          src={keyImage} 
                          alt="Left Key Graphic"></img>
                      : null}
                    
                    </section>
                  
                  </section>

                  <section
                    className="leftThreePointArea"
                    style={{borderColor: mainGamelineColor}}
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
                  
                  <section className="leftTopSideCourt">
                    
                    { leftTopSideCourtImage ?
                      <img
                        className="leftTopSideCourtImage"
                        src={leftTopSideCourtImage} 
                        alt="Left Top Side Court Graphic"></img>
                    : null}
                  
                  </section>
                  
                  <section className="leftBottomSideCourt">
                    
                    { leftBottomSideCourtImage ?
                      <img
                        className="leftBottomSideCourtImage"
                        src={leftBottomSideCourtImage} 
                        alt="Left Bottom Side Court Graphic"></img>
                    : null}
                  
                  </section>

                </section>

                {/* Center Court Area */}

                <section
                  className="centerCourtLine center"
                  style={{background: mainGamelineColor}}
                >

                  <section
                    className="centerCircle center"
                    style={{
                      borderColor: mainGamelineColor
                    }}
                  >
                  
                    <section
                      className="centerCirlceInner"
                      style={{
                        background: centerCircleColor,
                        opacity: centerCircleColorOpacity
                      }}
                    >
                      
                      { centerCirlceImage ?
                        <img
                          className="centerCirlceImage"
                          src={centerCirlceImage} 
                          alt="Center Graphic"></img>
                      : null}
                      
                    </section>
                  
                  </section>

                </section>

                {/* Right Court Area */}

                <section
                  className="rightCourtArea center"
                  style={{
                    borderColor: mainGamelineColor,
                    width: `calc(378px + ${borderEndSize})`
                  }}
                >

                  <section
                    className="rightThreePointArea"
                    style={{borderColor: mainGamelineColor}}
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
                    style={{borderColor: mainGamelineColor}}
                  >
                  
                    <section 
                      className="rightKeyAreaInner"
                      style={{
                        backgroundColor: keyColor,
                        opacity: keyColorOpacity
                      }}
                    >
                    
                      { keyImage ?
                        <img
                          className="keyImage"
                          src={keyImage} 
                          alt="Left Key Graphic"></img>
                      : null}
                    
                    </section>
                  
                  </section>

                  <section
                    className="rightLaneArea"
                    style={{
                      borderColor: mainGamelineColor
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
                        style={{background: mainGamelineColor}}
                      ></li>
                      <li
                        className="rightLaneTopMarkings"
                        style={{background: mainGamelineColor}}
                      ></li>
                      <li
                        className="rightLaneTopMarkings"
                        style={{background: mainGamelineColor}}
                      ></li>
                      <li
                        className="rightLaneTopMarkings"
                        style={{background: mainGamelineColor}}
                      ></li>

                    </ul>

                    <ul className="rightLaneMarkingContainer">

                      <li
                        className="rightLaneBottomMarkings"
                        style={{background: mainGamelineColor}}
                      ></li>
                      <li
                        className="rightLaneBottomMarkings"
                        style={{background: mainGamelineColor}}
                      ></li>
                      <li
                        className="rightLaneBottomMarkings"
                        style={{background: mainGamelineColor}}
                      ></li>
                      <li
                        className="rightLaneBottomMarkings"
                        style={{background: mainGamelineColor}}
                      ></li>

                    </ul>

                    <section className="rightGoalContainer">

                      <section className="rightGoalRim"></section>
                      <section className="rightGoalMount"></section>
                      <section className="rightGoalBackboard"></section>

                    </section>

                  </section>
                  
                  <section className="rightTopSideCourt">
                  
                    { rightTopSideCourtImage ?
                      <img
                        className="rightTopSideCourtImage"
                        src={rightTopSideCourtImage} 
                        alt="Right Top Side Court Graphic"></img>
                    : null}
                  
                  </section>
                  
                  <section className="rightBottomSideCourt">
                  
                    { rightBottomSideCourtImage ?
                      <img
                        className="rightBottomSideCourtImage"
                        src={rightBottomSideCourtImage} 
                        alt="Right Bottom Side Court Graphic"></img>
                    : null}
                  
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
