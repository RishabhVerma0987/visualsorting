import React, { Component } from "react";
import Bst from "./BST/BST";
import { timeout } from "./helperfunctions/helper";
import { Dropdown } from "react-bootstrap";

class BSTPlate extends Component {
  bst = new Bst();
  state = {
    elements: [],
    arrangedElements: [],
    root: null,
    colorList: ["beige", "beige", "beige", "beige", "beige", "beige", "beige"],
    findElement: 0,
    delay: 700,
    travesal: "preOrder",
    deactive: false
  };

  createTree = () => {
    var root = this.bst.insertSortedArray(
      this.state.elements,
      0,
      this.state.elements.length - 1
    );

    var arrangedElements = this.bst.preOrder(root);

    this.setState(
      {
        arrangedElements: arrangedElements
      },
      () => {
        this.setState({
          root: root
        });
      }
    );
  };

  componentWillMount() {
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

    elements = elements.sort();

    this.setState(
      {
        elements: elements
      },
      () => this.createTree()
    );
  };

  quickChangeColor = (element, color) => {
    var index = 0;
    for (let i = 0; i < this.state.arrangedElements.length; i++) {
      if (element === this.state.arrangedElements[i]) {
        index = i;
        break;
      }
    }
    var colorList = this.state.colorList;
    colorList[index] = color;
    this.setState({
      colorList: colorList
    });
  };

  changeTraversal = travesal => {
    this.setState({
      travesal: travesal
    });
  };

  chooseTrversal = () => {
    if (this.state.travesal === "preOrder") {
      return this.bst.preOrder(this.state.root);
    } else if (this.state.travesal === "postOrder") {
      return this.bst.postOrder(this.state.root);
    } else if (this.state.travesal === "inOrder") {
      return this.bst.inOrder(this.state.root);
    } else {
      return this.bst.bfs(this.state.root);
    }
  };

  findElement = async () => {
    this.setState({
      deactive: true
    });
    var ans = this.chooseTrversal();
    var flag = 0;
    var index;
    console.log(this.state.findElement);
    for (let i = 0; i < ans.length; i++) {
      if (ans[i].toString() === this.state.findElement) {
        this.quickChangeColor(ans[i], "#8de683");
        await timeout(this.state.delay);
        index = i;
        flag = 1;
        break;
      }
      this.quickChangeColor(ans[i], "#68a8ad");
      await timeout(this.state.delay);
      this.quickChangeColor(ans[i], "beige");
    }
    if (flag === 1) {
      console.log("found");
      this.quickChangeColor(ans[index], "beige");
    } else {
      console.log("not found");
    }
    this.setState({
      deactive: false
    });
  };

  changeDelay = delay => {
    this.setState({
      delay: delay
    });
  };
  render() {
    return (
      <div className="container-bst-plate">
        <div className="container-plate1">
          <div className="root">
            <div
              className="Node"
              style={{ backgroundColor: this.state.colorList[0] }}
            >
              {this.state.arrangedElements[0]}
            </div>
          </div>
          <div className="connector">
            <hr
              style={{
                borderWidth: "2px",
                borderColor: "#48494a",
                width: "160px",
                transform: "rotate(-28deg)",
                zIndex: "-10",
                marginLeft: "198px"
              }}
            ></hr>
            <hr
              style={{
                borderWidth: "2px",
                borderColor: "#48494a",
                width: "157px",
                transform: "rotate(28deg)",
                zIndex: "10",
                marginRight: "200px",
                marginTop: "-20px"
              }}
            ></hr>
          </div>

          <div className="depth1">
            <div
              className="Node"
              style={{ backgroundColor: this.state.colorList[1] }}
            >
              {this.state.arrangedElements[1]}
            </div>
            <div
              className="Node"
              style={{ backgroundColor: this.state.colorList[4] }}
            >
              {this.state.arrangedElements[4]}
            </div>
          </div>
          <div className="connector">
            <hr
              style={{
                borderWidth: "2px",
                borderColor: "#48494a",

                width: "120px",
                transform: "rotate(-60deg)",
                zIndex: "-10",
                marginLeft: "83px",
                marginTop: "50px"
              }}
            ></hr>
            <hr
              style={{
                borderWidth: "2px",
                borderColor: "#48494a",

                width: "120px",
                transform: "rotate(55deg)",
                zIndex: "-10",
                marginLeft: "170px",
                marginTop: "-20px"
              }}
            ></hr>
            <hr
              style={{
                borderWidth: "2px",
                borderColor: "#48494a",

                width: "120px",
                transform: "rotate(55deg)",
                zIndex: "-10",
                marginRight: "80px",
                marginTop: "-20px"
              }}
            ></hr>
            <hr
              style={{
                borderWidth: "2px",
                borderColor: "#48494a",
                width: "120px",
                transform: "rotate(-55deg)",
                zIndex: "-10",
                marginRight: "175px",
                marginTop: "-20px"
              }}
            ></hr>
          </div>
          <div className="depth2">
            <div
              className="Node"
              style={{ backgroundColor: this.state.colorList[2] }}
            >
              {this.state.arrangedElements[2]}
            </div>
            <div
              className="Node"
              style={{ backgroundColor: this.state.colorList[3] }}
            >
              {this.state.arrangedElements[3]}
            </div>
            <div
              className="Node"
              style={{ backgroundColor: this.state.colorList[5] }}
            >
              {this.state.arrangedElements[5]}
            </div>
            <div
              className="Node"
              style={{ backgroundColor: this.state.colorList[6] }}
            >
              {this.state.arrangedElements[6]}
            </div>
          </div>
        </div>
        <div className="container-plate2">
          <div className="row justify-content-center">
            <button
              class="btn btn-success"
              type="button"
              id="button-addon2"
              onClick={this.addElements}
              disabled={this.state.deactive}
            >
              Press to Randomly generate tree
            </button>
          </div>
          <div class="input-group mb-3 ">
            <input
              type="text"
              class="form-control"
              placeholder="Find number"
              aria-label="Find number"
              aria-describedby="button-addon2"
              style={{ backgroundColor: "#bfc9d9", fontSize: "13px" }}
              onChange={value =>
                this.setState({ findElement: value.target.value })
              }
            />
            <div class="input-group-append">
              <button
                class="btn btn-primary"
                type="button"
                id="button-addon2"
                style={{ fontSize: "13px" }}
                onClick={this.findElement}
              >
                Find
              </button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col"></div>
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                Speed: {this.state.delay}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  as="button"
                  onClick={() => this.changeDelay(1000)}
                >
                  Slow
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={() => this.changeDelay(700)}
                >
                  Medium
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={() => this.changeDelay(500)}
                >
                  Fast
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="col"></div>
            <Dropdown>
              <Dropdown.Toggle variant="info" id="dropdown-basic">
                {this.state.travesal}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  as="button"
                  onClick={() => this.changeTraversal("preOrder")}
                >
                  preOrder
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={() => this.changeTraversal("inOrder")}
                >
                  inOrder
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={() => this.changeTraversal("postOrder")}
                >
                  postOrder
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={() => this.changeTraversal("breathFirstSearch")}
                >
                  breathFirstSearch
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default BSTPlate;
