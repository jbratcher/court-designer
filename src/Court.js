import React, { Component } from 'react';
import './App.scss';

class Court extends Component {
  render() {

    const {
      borderColor,
      borderEndSize,
      borderSideSize,
      endBorderTextColor,
      endBorderTextSize,
      leftEndBorderText,
      mainGameLineColor,
      rightEndBorderText
    } = this.props;

    return (

      <section className="courtContainer center">

        <section className="gym center">

            <section className="leftEndBorderLettering center">

                <span
                  style={{
                    color: endBorderTextColor,
                    fontSize: `${endBorderTextSize}px`
                  }}
                >
                  {leftEndBorderText}
                </span>

            </section>

            <section className="rightEndBorderLettering center">

                <span
                  style={{
                    color: endBorderTextColor,
                    fontSize: `${endBorderTextSize}px`
                  }}
                >
                  {rightEndBorderText}
                </span>

            </section>

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
                      width: `calc(378px + ${borderEndSize})`
                    }}
                  >

                    <section
                      className="leftLaneArea"
                      style={{borderColor: mainGameLineColor}}
                    >

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
                    style={{background: mainGameLineColor}}
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
                      width: `calc(378px + ${borderEndSize})`
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

        </section>

      </section>

    );
  }
}

export default Court;
