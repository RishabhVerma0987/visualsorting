import React from "react";
import "./App.css";
import addBars from "./components/bars/addBars";

import { getRandomInt, timeout } from "./components/helperfunctions/helper";

import SortingPlate from "./components/sortingPlate";
import Heading from "./components/heading";
import BSTPlate from "./components/BSTPlate";

class App extends React.Component {
  state = {
    barsList: [],
    numberOfBars: 13,
    delay: 400,
    currentChosenSortingAlgo: "BubbleSort",
    deactivate: false,
    ds: "sorting"
  };

  componentDidMount() {
    this.addelementsTolist();
    addBars(this.state.barsList);
  }

  handleChange = (event, newValue) => {
    if (!this.state.deactivate) {
      this.setState({ numberOfBars: newValue });
      this.addelementsTolist();
    }
  };

  addelementsTolist = () => {
    var i = 0;
    var height = 0;
    var tempBarList = [];
    while (i < this.state.numberOfBars) {
      height = getRandomInt(20, 380);
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
    this.setState({
      deactivate: true
    });
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
    this.setState({
      deactivate: false
    });
  };

  //QuickSort
  quickChangeColor = (index, color) => {
    var array = this.state.barsList;
    array[index]["barColor"] = color;
    this.setState({
      barsList: array
    });
  };
  swap = (leftIndex, rightIndex) => {
    var items = this.state.barsList;
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    this.setState({
      barsList: items
    });
  };
  partition = async (left, right) => {
    var pivot = this.state.barsList[Math.floor((right + left) / 2)];

    this.quickChangeColor(this.state.barsList.indexOf(pivot), "#5c5c5c");
    var i = left;
    var j = right;
    while (i <= j) {
      while (this.state.barsList[i]["barHeight"] < pivot["barHeight"]) {
        i++;
        this.quickChangeColor(i, "#91d3e3");
        await timeout(this.state.delay);
        this.quickChangeColor(i, "beige");
      }
      while (this.state.barsList[j]["barHeight"] > pivot["barHeight"]) {
        j--;
        this.quickChangeColor(j, "#91d3e3");
        await timeout(this.state.delay);
        this.quickChangeColor(j, "beige");
      }
      if (i <= j) {
        this.swap(i, j);
        i++;
        j--;
      }
    }

    return i;
  };

  quickSort = async (left, right) => {
    var index;
    if (this.state.barsList.length > 1) {
      index = await this.partition(left, right);
      this.quickChangeColor(index, "#91e395");
      await timeout(this.state.delay);
      this.quickChangeColor(index, "beige");
      if (left < index - 1) {
        this.quickSort(left, index - 1);
      }
      if (index < right) {
        this.quickSort(index, right);
      }
    }
  };

  renderQuickSort = () => {
    this.quickSort(0, this.state.barsList.length - 1);
  };

  onChangeAlgo = algo => {
    this.setState({
      currentChosenSortingAlgo: algo
    });
  };

  onChangeSpeed = speed => {
    this.setState({
      delay: speed
    });
  };

  // merge = async (left, right) => {
  //   //color left and right to red
  //   var indexLeft = 0;
  //   var indexRight = 0;
  //   for (var i = 0; i < this.state.barsList.length; i++) {
  //     if (this.state.barsList[i] === left[0]) {
  //       indexLeft = i;
  //       break;
  //     }
  //   }
  //   for (var i = 0; i < this.state.barsList.length; i++) {
  //     if (this.state.barsList[i] === right[0]) {
  //       indexRight = i;
  //       break;
  //     }
  //   }
  //   for (let i = indexLeft; i < this.state.barsList.length; i++) {
  //     this.quickChangeColor(i, "red");
  //   }
  //   for (let i = indexRight; i < this.state.barsList.length; i++) {
  //     this.quickChangeColor(i, "blue");
  //   }
  //   await timeout(500);

  //   let resultArray = [],
  //     leftIndex = 0,
  //     rightIndex = 0;

  //   while (leftIndex < left.length && rightIndex < right.length) {
  //     if (left[leftIndex]["barHeight"] < right[rightIndex]["barHeight"]) {
  //       resultArray.push(left[leftIndex]);
  //       leftIndex++;
  //     } else {
  //       resultArray.push(right[rightIndex]);
  //       rightIndex++;
  //     }
  //   }

  //   for (i = 0; i < this.state.barsList.length; i++) {
  //     this.quickChangeColor(i, "beige");
  //   }
  //   await timeout(200);
  //   return resultArray
  //     .concat(left.slice(leftIndex))
  //     .concat(right.slice(rightIndex));
  // };

  // mergeSort = async unsortedArray => {
  //   if (unsortedArray.length <= 1) {
  //     return unsortedArray;
  //   }
  //   const middle = Math.floor(unsortedArray.length / 2);
  //   const left = unsortedArray.slice(0, middle);
  //   const right = unsortedArray.slice(middle);
  //   return await this.merge(
  //     await this.mergeSort(left),
  //     await this.mergeSort(right)
  //   );
  // };

  // renderMergeSort = async () => {
  //   var sortedArray = await this.mergeSort(this.state.barsList);
  //   this.setState({
  //     barsList: sortedArray
  //   });
  // };
  insertionSort = async () => {
    var inputArr = this.state.barsList;
    let length = inputArr.length;
    this.setState({
      deactivate: true
    });
    for (let i = 1; i < length; i++) {
      let key = inputArr[i];
      this.quickChangeColor(this.state.barsList.indexOf(key), "#5c5c5c");
      await timeout(this.state.delay);
      let j = i - 1;
      while (j >= 0 && inputArr[j]["barHeight"] > key["barHeight"]) {
        inputArr[j + 1] = inputArr[j];
        this.quickChangeColor(j + 1, "#91d3e3");
        this.setState({
          barsList: inputArr
        });
        await timeout(this.state.delay);
        this.quickChangeColor(j + 1, "beige");
        await timeout(this.state.delay);
        j = j - 1;
      }
      inputArr[j + 1] = key;
      this.quickChangeColor(j + 1, "#91e395");
    }
    var items = this.state.barsList;
    for (var i = 0; i < items.length; i++) {
      items[i]["barColor"] = "beige";
    }
    this.setState({
      barsList: items
    });
    this.setState({
      deactivate: false
    });
  };
  sorting = () => {
    if (!this.state.deactivate) {
      if (this.state.currentChosenSortingAlgo === "BubbleSort") {
        return this.bubbleSort;
      } else if (this.state.currentChosenSortingAlgo === "QuickSort") {
        return this.renderQuickSort;
      } else if (this.state.currentChosenSortingAlgo === "InsertionSort") {
        return this.insertionSort;
      }
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="heading">
            <Heading />
          </div>
        </div>
        <div className="row justify-content-center">
          <a
            href="https://github.com/RishabhVerma098/visualsorting"
            className="githubLink"
            target="_blank"
            rel="noopener"
          >
            <i className="fab fa-github"></i> Github Repo {"</>"}
          </a>
        </div>
        <div className="row " style={{ marginTop: "10px", marginLeft: "10%" }}>
          <button
            type="button"
            class={
              this.state.ds === "sorting"
                ? "btn btn-warning btn-sm"
                : "btn btn-outline-warning btn-sm"
            }
            onClick={() =>
              this.setState({
                ds: "sorting"
              })
            }
            style={{ borderRadius: "15px" }}
          >
            Sorting
          </button>

          <button
            type="button"
            class={
              this.state.ds === "tree"
                ? "btn btn-info btn-sm"
                : "btn btn-outline-info btn-sm"
            }
            style={{ marginLeft: "10px", borderRadius: "15px" }}
            onClick={() =>
              this.setState({
                ds: "tree"
              })
            }
          >
            Binary Search Tress
          </button>
        </div>
        <div className="row justify-content-center ">
          {this.state.ds === "sorting" ? (
            <SortingPlate
              numberOfBars={this.state.numberOfBars}
              addBars={addBars(this.state.barsList)}
              barsList={this.state.barsList}
              slider={this.handleChange}
              Sort={this.sorting()}
              onChangeAlgo={this.onChangeAlgo}
              onChangeSpeed={this.onChangeSpeed}
            />
          ) : (
            <BSTPlate />
          )}
        </div>
      </div>
    );
  }
}
export default App;
