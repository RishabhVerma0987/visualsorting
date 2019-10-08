import React, { Component } from "react";
import Bst from "./BST/BST";
class BSTPlate extends Component {
  state = {
    elements: [],
    arrangedElements: []
  };

  createTree = async () => {
    var bst = new Bst();
    var root = bst.insertSortedArray(
      this.state.elements,
      0,
      this.state.elements.length - 1
    );

    this.setState({
      arrangedElements: bst.preOrder(root)
    });
  };

  componentDidMount() {
    this.addElements();
  }
  getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  addElements = () => {
    var elements = [];

    for (let i = 0; i < 7; i++) {
      var number = Math.round(this.getRandomNumber(1, 99));
      elements.push(number);
    }
    console.log(elements);
    elements = elements.sort();
    console.log(elements);
    this.setState(
      {
        elements: elements
      },
      () => this.createTree()
    );
  };

  render() {
    return (
      <div className="container-bst-plate">
        <div className="container-plate1">
          <div className="root">
            <div className="Node">{this.state.arrangedElements[0]}</div>
          </div>
          <div className="connector">
            <hr
              style={{
                borderWidth: "4px",
                borderColor: "black",
                backgroundColor: "blue",
                width: "162px",
                transform: "rotate(-28deg)",
                zIndex: "-10",
                marginLeft: "198px"
              }}
            ></hr>
            <hr
              style={{
                borderWidth: "4px",
                borderColor: "black",
                backgroundColor: "blue",
                width: "160px",
                transform: "rotate(28deg)",
                zIndex: "10",
                marginRight: "200px",
                marginTop: "-20px"
              }}
            ></hr>
          </div>

          <div className="depth1">
            <div className="Node">{this.state.arrangedElements[1]}</div>
            <div className="Node">{this.state.arrangedElements[4]}</div>
          </div>
          <div className="connector">
            <hr
              style={{
                borderWidth: "4px",
                borderColor: "black",
                backgroundColor: "blue",
                width: "120px",
                transform: "rotate(-55deg)",
                zIndex: "-10",
                marginLeft: "80px",
                marginTop: "45px"
              }}
            ></hr>
            <hr
              style={{
                borderWidth: "4px",
                borderColor: "black",
                backgroundColor: "blue",
                width: "120px",
                transform: "rotate(55deg)",
                zIndex: "-10",
                marginLeft: "175px",
                marginTop: "-20px"
              }}
            ></hr>
            <hr
              style={{
                borderWidth: "4px",
                borderColor: "black",
                backgroundColor: "blue",
                width: "120px",
                transform: "rotate(55deg)",
                zIndex: "-10",
                marginRight: "80px",
                marginTop: "-20px"
              }}
            ></hr>
            <hr
              style={{
                borderWidth: "4px",
                borderColor: "black",
                backgroundColor: "blue",
                width: "120px",
                transform: "rotate(-55deg)",
                zIndex: "-10",
                marginRight: "175px",
                marginTop: "-20px"
              }}
            ></hr>
          </div>
          <div className="depth2">
            <div className="Node">{this.state.arrangedElements[2]}</div>
            <div className="Node">{this.state.arrangedElements[3]}</div>
            <div className="Node">{this.state.arrangedElements[5]}</div>
            <div className="Node">{this.state.arrangedElements[6]}</div>
          </div>
        </div>
        <div className="container-plate2"></div>
      </div>
    );
  }
}

export default BSTPlate;
