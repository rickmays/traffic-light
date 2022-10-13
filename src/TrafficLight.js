import React from "react";
import { setRed, setYellow, setGreen } from "./index";
import { connect } from "react-redux";
import "./TrafficLight.css";

const TrafficLight = (props) => {
  const changeLight = () => {
    if (props.red) {
      return props.setGreen();
    } else {
      if (props.green) {
        return props.setYellow();
      } else {
        if (props.yellow) {
          return props.setRed();
        }
      }
    }
  };
  return (
    <div className="container">
      <div className="traffic-light">
        <div className={props.red ? "red-light-on" : "red-light-off"}></div>
        <div
          className={props.yellow ? "yellow-light-on" : "yellow-light-off"}
        ></div>
        <div
          className={props.green ? "green-light-on" : "green-light-off"}
        ></div>
      </div>
      <button className="button" onClick={changeLight}>
        Click to Change Light
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  red: state.red,
  yellow: state.yellow,
  green: state.green,
});

const matchDispatchToProps = {
  setRed,
  setYellow,
  setGreen,
};

export default connect(mapStateToProps, matchDispatchToProps)(TrafficLight);
