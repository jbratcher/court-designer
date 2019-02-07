import React, { Component } from 'react';
import './App.scss';

class Court extends Component {
  render() {

    const {
      borderColor,
      borderEndSize,
      borderSideSize
    } = this.props;

    return (

      <section className="courtContainer center">

        <section className="gym center">

          <section className="gymFloor center">

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

              <section className="courtOuterGameLine center">

                <section className="courtFloor center">

                  {/* Left Court Area */}

                  <section className="leftCourtArea center fill">

                    <section className="leftLaneArea">

                    </section>

                    <section className="leftKeyArea">

                    </section>

                    <section className="leftThreePointArea">

                    </section>

                  </section>

                  {/* Center Court Area */}

                  <section className="centerCourtLine center">

                    <section className="centerCircle center">

                    </section>

                  </section>

                  {/* Right Court Area */}

                  <section className="rightCourtArea center fill">

                    <section className="rightThreePointArea">

                    </section>

                    <section className="rightKeyArea">

                    </section>

                    <section className="rightLaneArea">

                    </section>

                  </section>

                </section>

              </section>

              {/*
                container to hold right game area
                  three point gameline and area
                  free throw lane gameline and area
                  key gameline and area
                  hash marks gameline and area
                  baseket ball rim and dashed line
              */}

            </section>

          </section>

        </section>

      </section>

    );
  }
}

export default Court;
