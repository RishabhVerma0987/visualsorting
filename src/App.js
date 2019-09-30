import React from "react";
import "./App.css";
import addBars from "./components/bars/addBars";
import PrettoSlider from "./components/pretto";
import AnimateHeight from "react-animate-height";

class App extends React.Component {
  state = {
    barsList: [],
    numberOfBars: 13,
    delay: 1000
  };

  componentWillMount() {
    this.addelementsTolist();
    this.addBars();
  }

  //Temporary
  barStyle = (color, height) => {
    var h = height.toString() + "px";
    return {
      backgroundColor: color,
      height: h,
      flex: 1,
      marginLeft: "10px",
      borderBottomLeftRadius: "5px",
      borderBottomRightRadius: "5px",
      fontSize: "0.8vw",
      fontWeight: "200",
      textAlign: "center"
    };
  };

  addBars = () => {
    var tempBarList = [];
    for (let i = 0; i < this.state.barsList.length; i++) {
      tempBarList.push(
        <AnimateHeight
          duration={500}
          height={this.state.barsList[i]["barHeightToShow"]}
        >
          <div
            className="Bar"
            style={this.barStyle(
              this.state.barsList[i]["barColor"],
              this.state.barsList[i]["barHeightToShow"]
            )}
          >
            {this.state.barsList[i]["barHeightValue"]}
          </div>
        </AnimateHeight>
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
        barHeightToShow: height,
        barColor: "beige",
        barHeightValue: height
      });
      i = i + 1;
    }
    this.setState({
      barsList: tempBarList
    });
  };

  changeColor = (array, index, color) => {
    array[index]["barColor"] = color;
    this.setState({
      barsList: array
    });
    return array;
  };

  //Bubble Sort
  bubbleSort = async () => {
    var items = this.state.barsList;
    var length = items.length;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - i - 1; j++) {
        if (items[j]["barHeightValue"] > items[j + 1]["barHeightValue"]) {
          items = this.changeColor(items, j, "red");
          items = this.changeColor(items, j + 1, "red");

          //Height Value
          var tmp = items[j]["barHeightValue"];
          items[j]["barHeightValue"] = items[j + 1]["barHeightValue"];
          items[j + 1]["barHeightValue"] = tmp;

          //Height Render (Here I have to Scale them)

          var tmp = items[j]["barHeightToShow"];
          items[j]["barHeightToShow"] = items[j + 1]["barHeightToShow"];
          items[j + 1]["barHeightToShow"] = tmp;
        }
        await this.timeout(this.state.delay);
        items = this.changeColor(items, j, "beige");
        items = this.changeColor(items, j + 1, "green");

        this.setState({
          barsList: items
        });
      }
    }
    var items = this.state.barsList;
    for (var i = 0; i < length; i++) {
      items[i]["barColor"] = "beige";
    }
    this.setState({
      barsList: items
    });
  };

  // await this.timeout(this.state.delay);
  timeout = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  render() {
    console.log(this.state.barsList);
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
            <button className="btn" onClick={this.bubbleSort}>
              Press
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
