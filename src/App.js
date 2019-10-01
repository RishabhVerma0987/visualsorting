import React from "react";
import "./App.css";
import addBars from "./components/bars/addBars";

import { getRandomInt, timeout } from "./components/helperfunctions/helper";

import SortingPlate from "./components/sortingPlate";

class App extends React.Component {
  state = {
    barsList: [],
    numberOfBars: 13,
    delay: 400
  };

  componentWillMount() {
    this.addelementsTolist();
    addBars(this.state.barsList);
  }

  handleChange = (event, newValue) => {
    this.setState({ numberOfBars: newValue });
    this.addelementsTolist();
  };

  addelementsTolist = () => {
    var i = 0;
    var height = 0;
    var tempBarList = [];
    while (i < this.state.numberOfBars) {
      height = getRandomInt(10, 230);
      tempBarList.push({
        barHeight: height,
        barColor: "beige"
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
        if (items[j]["barHeight"] > items[j + 1]["barHeight"]) {
          items = this.changeColor(items, j, "#91d3e3");
          items = this.changeColor(items, j + 1, "#91d3e3");

          var tmp = items[j]["barHeight"];
          items[j]["barHeight"] = items[j + 1]["barHeight"];
          items[j + 1]["barHeight"] = tmp;
        }
        await timeout(this.state.delay);
        items = this.changeColor(items, j, "beige");
        items = this.changeColor(items, j + 1, "#91e395");

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

  render() {
    return (
      <SortingPlate
        numberOfBars={this.state.numberOfBars}
        addBars={addBars(this.state.barsList)}
        barsList={this.state.barsList}
        slider={this.handleChange}
        Sort={this.bubbleSort}
      />
    );
  }
}
export default App;
