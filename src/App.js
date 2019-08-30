import React from "react";
import "./App.css";
import PrettoSlider from "./components/pretto";
class App extends React.Component {
  state = {
    heightOfBars: [
      { height: 130, isActive: false },
      { height: 220, isActive: false },
      { height: 120, isActive: false },
      { height: 150, isActive: false },
      { height: 80, isActive: false },
      { height: 140, isActive: false },
      { height: 20, isActive: false },
      { height: 190, isActive: false },
      { height: 135, isActive: false },
      { height: 80, isActive: false }
    ],
    numberOfElements: 30,
    delay: 80
  };

  handleChange = (event, newValue) => {
    this.setState({ numberOfElements: newValue });
    this.addelementsTolist();
  };

  divStyle = (height, isActive) => {
    var h = height.toString() + "px";
    if (isActive) {
      return {
        backgroundColor: "red",
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
        height: h,
        fontSize: "8px",
        marginRight: "7px",
        flex: 1
      };
    }
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

    for (let i = 0; i < this.state.heightOfBars.length; i++) {
      barsList.push(
        <div
          className="bar"
          style={this.divStyle(
            this.state.heightOfBars[i]["height"],
            this.state.heightOfBars[i]["isActive"]
          )}
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
      elementList.push({ height: element, isActive: false });
      i = i + 1;
    }
    this.setState({
      heightOfBars: elementList
    });
  };

  changeColor = (newHeightOfBars, index, ans) => {
    newHeightOfBars[index]["isActive"] = ans;
    console.log(newHeightOfBars);
  };

  revertColorsBack = () => {
    var list = this.state.heightOfBars;
    for (var i = 0; i < list.length; i++) {
      list[i]["isActive"] = false;
    }
    this.setState({
      heightsOfBars: list
    });
  };

  bubbleSort = async () => {
    var items = this.state.heightOfBars;
    var length = items.length;

    var newHeightOfBars = this.state.heightOfBars;
    for (var i = 0; i < length; i++) {
      for (var j = 0; j < length - i - 1; j++) {
        if (items[j]["height"] > items[j + 1]["height"]) {
          this.changeColor(newHeightOfBars, j, true);
          var tmp = items[j];
          items[j] = items[j + 1];
          items[j + 1] = tmp;
        }
        await this.timeout(this.state.delay);
        this.changeColor(newHeightOfBars, j, false);
        await this.timeout(this.state.delay);

        this.setState({
          heightsOfBars: items
        });
      }
    }
    this.revertColorsBack();
  };
  timeout = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  sleep = async () => {
    await this.timeout(1000);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="container1">{this.addBars()}</div>
        <div className="container2">
          <div className="row1">
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={30}
              max="55"
              min="2"
              onChange={this.handleChange}
            />
          </div>
          <div className="row2">
            <div className="btn btn-primary" onClick={this.bubbleSort}>
              Sort
            </div>
          </div>
          <div className="row3">
            <div class="btn-group">
              <button
                class="btn btn-secondary btn-sm dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Slow
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item">Medium</a>
                <a class="dropdown-item">Fast</a>
                <a class="dropdown-item">Very Fast</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
