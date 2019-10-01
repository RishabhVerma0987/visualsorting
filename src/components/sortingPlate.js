import React, { Component } from "react";

import PrettoSlider from "./pretto";
import { DropdownButton, Dropdown } from "react-bootstrap";
class SortingPlate extends Component {
  render() {
    return (
      <div className="container-fluid">
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
