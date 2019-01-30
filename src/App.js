import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (

      <section className="container center">

        <section className="gym center">

          <section className="gymFloor center">

            <section className="courtBorderLine center">

            {/*
              container to hold left game area
                three point gameline and area
                free throw lane gameline and area
                key gameline and area
                hash marks gameline and area
                baseket ball rim and dashed line
            */}

              <section className="courtOuterGameLine center">

                <section className="courtFloor center">

                  <section className="centerCourtLine center">

                    <section className="centerCircle center">

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

export default App;
