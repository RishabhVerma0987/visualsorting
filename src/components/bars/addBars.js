import React from "react";
import AnimateHeight from "react-animate-height";
import "../../App.css";
//Temporary
var barStyle = (color, height) => {
  var h = height.toString() + "px";
  return {
    backgroundColor: color,
    height: h,
    width: "1.8vw",
    marginLeft: "10px",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
    fontSize: "0.7vw",
    fontWeight: "200",
    textAlign: "center"
  };
};

var addBars = barsList => {
  var tempBarList = [];
  for (let i = 0; i < barsList.length; i++) {
    tempBarList.push(
      <AnimateHeight duration={500} height={barsList[i]["barHeight"]}>
        <div
          className="Bar"
          style={barStyle(barsList[i]["barColor"], barsList[i]["barHeight"])}
          key={i}
        >
          {barsList[i]["barHeight"]}
        </div>
      </AnimateHeight>
    );
  }
  return tempBarList;
};

export default addBars;
