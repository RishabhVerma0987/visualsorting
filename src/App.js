import React from "react";
import "./App.css";
import addBars from "./components/bars/addBars";
import PrettoSlider from "./components/pretto";

class App extends React.Component {
  //Not in use
  state = {
    barsList: [
      { barHeight: 100, barColor: "beige", barOrder: 1 },
      { barHeight: 80, barColor: "beige", barOrder: 2 },
      { barHeight: 140, barColor: "beige", barOrder: 3 },
      { barHeight: 120, barColor: "beige", barOrder: 4 }
    ],
    numberOfBars: 10
  };

  //Temporary
  barStyle = (color, height, order) => {
    var h = height.toString() + "px";
    return {
      backgroundColor: color,
      height: h,
      flex: 1,
      marginLeft: "10px",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
      order: order,
      fontSize: "0.8vw",
      fontWeight: "200",
      textAlign: "center"
    };
  };

  addBars = () => {
    var tempBarList = [];
    for (let i = 0; i < this.state.barsList.length; i++) {
      tempBarList.push(
        <div
          className="Bar"
          style={this.barStyle(
            this.state.barsList[i]["barColor"],
            this.state.barsList[i]["barHeight"],
            this.state.barsList[i]["barOrder"]
          )}
        >
          {this.state.barsList[i]["barHeight"]}
        </div>
      );
    }
    return tempBarList;
  };
  handleChange = (event, newValue) => {
    this.setState({ numberOfBars: newValue });
    this.addelementsTolist();
  };
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  addelementsTolist = () => {
    //less than 250 //more than 2
    var i = 0;
    var height = 0;
    var tempBarList = [];
    while (i < this.state.numberOfBars) {
      height = this.getRandomInt(10, 230);
      tempBarList.push({
        barHeight: height,
        barColor: "beige",
        barOrder: i
      });
      i = i + 1;
    }
    this.setState({
      barsList: tempBarList
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="container1">{this.addBars()}</div>
        <div className="container2">
          <div className="row">
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={10}
              max="20"
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

{
  /* <div className="container1">{addBars(this.state.numberOfBars)}</div> */
}
