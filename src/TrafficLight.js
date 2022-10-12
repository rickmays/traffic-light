import React from "react";
import { setRed, setYellow, setGreen } from "./index";
import { connect } from "react-redux";
import "./TrafficLight.css";

class TrafficLight extends React.Component {
  
  
  changeLight = () => {
    if (this.props.red) {
      return this.props.setGreen();
    } else {
      if (this.props.green) {
        return this.props.setYellow();
      } else {
        if (this.props.yellow) {
          return this.props.setRed();
        }
      }
    }
  }
  render() {
    return (
      <div className="container">
        <div className="traffic-light">
          <div
            className={this.props.red ? "red-light-on" : "red-light-off"}
          ></div>
          <div
            className={
              this.props.yellow ? "yellow-light-on" : "yellow-light-off"
            }
          ></div>
          <div
            className={this.props.green ? "green-light-on" : "green-light-off"}
          ></div>
        </div>
        <button className="button" onClick={this.changeLight}>
          Click to Change Light
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    red: state.red,
    yellow: state.yellow,
    green: state.green,
  };
}

const matchDispatchToProps = {
  setRed,
  setYellow,
  setGreen,
};

export default connect(mapStateToProps, matchDispatchToProps)(TrafficLight);
