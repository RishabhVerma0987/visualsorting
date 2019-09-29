import React from "react";
var barStyle = () => {
  return {
    backgroundColor: "beige",
    height: "100%",
    flex: 1,
    marginLeft: "10px",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px"
  };
};

var addBars = numberOfBars => {
  var barList = [];
  for (var i = 0; i < numberOfBars; i++) {
    barList.push(<div className="Bar" style={barStyle()}></div>);
  }
  return barList;
};
export default addBars;
