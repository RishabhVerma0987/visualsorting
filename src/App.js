import React from "react";
import "./App.css";
import addBars from "./components/bars/addBars";
import PrettoSlider from "./components/pretto";
import { getRandomInt, timeout } from "./components/helperfunctions/helper";
import { DropdownButton, Dropdown } from "react-bootstrap";

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
      <div className="container-fluid">
        <div className="container1">{addBars(this.state.barsList)}</div>
        <div className="container2">
          {/* <div className="row justify-content-center slider">
            <span className="sliderTitle">
              Slide to add or delete bars,{" "}
              <span class="badge badge-pill badge-success">
                Currently{" "}
                <span class="badge badge-light">{this.state.numberOfBars}</span>
              </span>
            </span>
            <PrettoSlider
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={10}
              max="15"
              min="2"
              onChange={this.handleChange}
            />
          </div>
          <div className="row">
            <div className="col justify-content-center">
              <DropdownButton
                id="dropdown-item-button"
                title="Sorting Technique"
                size="sm"
              >
                <Dropdown.Item as="button">bubbleSort</Dropdown.Item>
                <Dropdown.Item as="button">mergeSort</Dropdown.Item>
                <Dropdown.Item as="button">QuickSort</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="col justify-content-center">
              <DropdownButton id="dropdown-item-button" title="Speed" size="sm">
                <Dropdown.Item as="button">Slow</Dropdown.Item>
                <Dropdown.Item as="button">Medium</Dropdown.Item>
                <Dropdown.Item as="button">fast</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div className="row justify-content-center ">
            <button
              type="button"
              class="btn btn-warning btn-sm sort "
              onClick={this.bubbleSort}
            >
              Sort
            </button>
          </div> */}
          <div className="slider">
            <span className="sliderTitle">
              Slide to add or delete bars,{" "}
              <span class="badge badge-pill badge-success">
                Currently{" "}
                <span class="badge badge-light">{this.state.numberOfBars}</span>
              </span>
            </span>
            <PrettoSlider
              className="slide"
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={10}
              max="15"
              min="2"
              onChange={this.handleChange}
            />
          </div>
          <div className="dropDowns">
            <div className="sortingTechnique">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Sorting Technique
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as="button">bubbleSort</Dropdown.Item>
                  <Dropdown.Item as="button">mergeSort</Dropdown.Item>
                  <Dropdown.Item as="button">QuickSort</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="speedOfSorting">
              <DropdownButton id="dropdown-item-button" title="Speed" size="sm">
                <Dropdown.Item as="button">Slow</Dropdown.Item>
                <Dropdown.Item as="button">Medium</Dropdown.Item>
                <Dropdown.Item as="button">fast</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div className="sortButton">
            <button
              type="button"
              class="btn btn-warning btn-sm sort "
              onClick={this.bubbleSort}
            >
              Sort
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
