import React, { Component } from 'react';
import Menu from './Menu';
import Court from './Court';
import './styles/App.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      borderColor: "black",
      borderColorOpacity: 1,
      borderEndSize: 48,
      borderSideSize: 36,
      centerCircleColor: "transparent",
      centerCircleColorOpacity: 1,
      centerCirlceImage: null,
      endBorderLetterSpacing: 0,
      endBorderTextColor: "white",
      endBorderTextColorOpacity: 1,
      endBorderTextSize: 48,
      image: null,
      laneColor: "#DFBB85",
      laneColorOpacity: 1,
      leftEndBorderText: "Fairmont",
      leftTopSideCourtImage: null,
      leftBottomSideCourtImage: null,
      keyColor: "#DFBB85",
      keyColorOpacity: 1,
      mainGamelineColor: "black",
      keyImage: null,
      mainGamelineOpacity: 1,
      rightEndBorderText: "Falcons",
      rightTopSideCourtImage: null,
      rightBottomSideCourtImage: null,
      threePointAreaColor: "#DFBB85",
      threePointAreaColorOpacity: 1,
      volleyballLineColor: "white",
      volleyballShown: false
    };
  }

  componentDidMount() {
  }
  
  handleImageReset = e => {
    let imageElement = e.target.name;
    this.setState({
      [imageElement]: null
    });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  handleColorReset = e => {
    let propertyNameColor = e.target.parentElement.firstElementChild.firstElementChild.name;
    let propertyNameOpacity = `${e.target.parentElement.firstElementChild.firstElementChild.name}Opacity`;

    if(propertyNameColor === "borderColor" || propertyNameColor === "mainGamelineColor") {
      this.setState({
        [propertyNameColor]: "black",
        [propertyNameOpacity]: 1
      });
    } else if(propertyNameColor === "endBorderTextColor" || propertyNameColor === "volleyballLineColor") {
      this.setState({
        [propertyNameColor]: "white",
        [propertyNameOpacity]: 1
      });
    } else if(propertyNameColor === "centerCircleColor" || propertyNameColor === "threePointAreaColor") {
      this.setState({
        [propertyNameColor]: "transparent",
        [propertyNameOpacity]: 1,
        centerCirlceImage: null
      });
    } else if(propertyNameColor === "keyColor" || propertyNameColor === "laneColor") {
      this.setState({
        [propertyNameColor]: "#DFBB85",
        [propertyNameOpacity]: 1,
        keyImage: null
      });
    } else {
      return null;
    }
  }
  
  handleColorStain = e => {
    let property = `${e.target.parentElement.firstElementChild.name}Opacity`;
    this.setState({
      [property]: e.target.value
    });
  }
  
  handleImage = e => {
    let image = e.target.files[0];
    this.setState({
      [e.target.name]: window.URL.createObjectURL(image),  // https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
      image: image
    }, e => window.URL.revokeObjectURL(image));
}
  
  handleShow = e => {
    this.setState({
      volleyballShown: !this.state.volleyballShown
    });
  }

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
      laneColor,
      laneColorOpacity,
      leftEndBorderText,
      leftTopSideCourtImage,
      leftBottomSideCourtImage,
      keyColor,
      keyColorOpacity,
      keyImage,
      mainGamelineColor,
      mainGamelineColorOpacity,
      rightEndBorderText,
      rightTopSideCourtImage,
      rightBottomSideCourtImage,
      threePointAreaColor,
      threePointAreaColorOpacity,
      volleyballLineColor,
      volleyballShown
    } = this.state;


    return (
      
      <section className="appContainer">
      
        <header className="header">

          <h1 className="title">Court Designer</h1>
          <p className="headline">Design your own basketball court</p>

        </header>

        <Menu
          handleColorReset={this.handleColorReset}
          handleColorStain={this.handleColorStain}
          handleImage={this.handleImage}
          handleImageReset={this.handleImageReset}
          handleInputChange={this.handleInputChange}
          handleShow={this.handleShow}
        />

        <Court
          borderColor={borderColor}
          borderColorOpacity={borderColorOpacity}
          borderEndSize={borderEndSize}
          borderSideSize={borderSideSize}
          centerCircleColor={centerCircleColor}
          centerCircleColorOpacity={centerCircleColorOpacity}
          centerCirlceImage={centerCirlceImage}
          endBorderLetterSpacing={endBorderLetterSpacing}
          endBorderTextColor={endBorderTextColor}
          endBorderTextColorOpacity={endBorderTextColorOpacity}
          endBorderTextSize={endBorderTextSize}
          laneColor={laneColor}
          laneColorOpacity={laneColorOpacity}
          leftEndBorderText={leftEndBorderText}
          leftTopSideCourtImage={leftTopSideCourtImage}
          leftBottomSideCourtImage={leftBottomSideCourtImage}
          rightTopSideCourtImage={rightTopSideCourtImage}
          rightBottomSideCourtImage={rightBottomSideCourtImage}
          keyColor={keyColor}
          keyColorOpacity={keyColorOpacity}
          keyImage={keyImage}
          mainGamelineColor={mainGamelineColor}
          mainGamelineColorOpacity={mainGamelineColorOpacity}
          rightEndBorderText={rightEndBorderText}
          threePointAreaColor={threePointAreaColor}
          threePointAreaColorOpacity={threePointAreaColorOpacity}
          volleyballLineColor={volleyballLineColor}
          volleyballShown={volleyballShown}
        />

        <footer>

          <p>Court Designer 2019</p>
          <p>Built with React</p>
          <p>Powered by Github</p>

        </footer>

      </section>

    );
  }
}

export default App;
