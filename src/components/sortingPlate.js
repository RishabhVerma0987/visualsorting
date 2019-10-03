import React, { Component } from "react";

import PrettoSlider from "./pretto";
import { Dropdown } from "react-bootstrap";
class SortingPlate extends Component {
  state = {
    currentAlgo: "BubbleSort",
    delay: 400
  };
  onChange = () => {
    this.props.onChangeAlgo(this.state.currentAlgo);
  };

  onChangeSpeed = () => {
    this.props.onChangeSpeed(this.state.delay);
  };
  changeAlogFromDropDown = algo => {
    this.setState(
      {
        currentAlgo: algo
      },
      this.onChange
    );
  };

  changeDelay = delay => {
    this.setState(
      {
        delay: delay
      },
      this.onChangeSpeed
    );
  };

  showSpeed = () => {
    if (this.state.delay === 600) {
      return "Slow";
    } else if (this.state.delay === 400) {
      return "Medium";
    } else {
      return "Fast";
    }
  };
  render() {
    return (
      <div className="container-plate">
        <div className="container1">{this.props.addBars}</div>
        <div className="container2">
          <div className="slider">
            <span className="sliderTitle">
              Slide to add or delete bars,{" "}
              <span class="badge badge-pill badge-success">
                Currently{" "}
                <span class="badge badge-light">{this.props.numberOfBars}</span>
              </span>
            </span>
            <PrettoSlider
              className="slide"
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={10}
              max="15"
              min="2"
              onChange={this.props.slider}
            />
          </div>
          <div className="dropDowns">
            <div className="sortingTechnique">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {this.state.currentAlgo}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    as="button"
                    //if you want to pass info from a button use arrow func inside onClick/onSelect VERY IMPORTTANT
                    onClick={() => this.changeAlogFromDropDown("BubbleSort")}
                  >
                    BubbleSort
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    onClick={() => this.changeAlogFromDropDown("QuickSort")}
                  >
                    QuickSort
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    onClick={() => this.changeAlogFromDropDown("InsertionSort")}
                  >
                    InsertionSort
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="speedOfSorting">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {this.showSpeed()}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    as="button"
                    onClick={() => this.changeDelay(600)}
                  >
                    Slow
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    onClick={() => this.changeDelay(400)}
                  >
                    Medium
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    onClick={() => this.changeDelay(200)}
                  >
                    Fast
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="sortButton">
            <button
              type="button"
              class="btn btn-warning btn-sm sort "
              onClick={this.props.Sort}
            >
              Sort
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SortingPlate;
