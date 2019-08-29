import React from "react";
import "./App.css";
import PrettoSlider from "./components/pretto";
class App extends React.Component {
  state = {
    heights: [130, 220, 120, 150, 80],
    numberOfElements: 30
  };
  handleChange = (event, newValue) => {
    this.setState({ numberOfElements: newValue });
    this.addelementsTolist();
  };

  divStyle = height => {
    var h = height.toString() + "px";
    return {
      backgroundColor: "#e0dda4",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
      height: h,
      fontSize: "8px",
      marginRight: "7px",
      flex: 1
    };
  };

  addBars = () => {
    var barsList = [];

    for (let i = 0; i < this.state.heights.length; i++) {
      barsList.push(
        <div
          className="bar"
          style={this.divStyle(this.state.heights[i])}
          key={i}
        ></div>
      );
    }
    return barsList;
  };

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  addelementsTolist = () => {
    //less than 250 //more than 2
    var i = 0;
    var element = 0;
    var elementList = [];
    while (i < this.state.numberOfElements) {
      element = this.getRandomInt(10, 230);
      elementList.push(element);
      i = i + 1;
    }
    this.setState({
      heights: elementList
    });
  };

  render() {
    console.log(this.state.numberOfElements);
    console.log(this.state.heights);
    return (
      <div className="container-fluid">
        <div className="container1">{this.addBars()}</div>
        <div className="container2">
          <div className="row">
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={30}
              max="55"
              min="2"
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
