import React, { Component } from "react";
import { render } from "@testing-library/react";

class Filter extends Component {
  state = {
    inputValue: "",
  };

  sendData = () => {
    this.props.updateValue(this.state.inputValue);
  }
  updateInputValue = (ev) => {
    this.setState({
      inputValue: ev.target.value
    });
  }
  

  render() {
    return (
      <div className='filter d-flex justify-content-between mb-4'>
        <input className='rounded p-2 py-3 w-100 mr-2' type="text" defaultValue={this.state.inputValue} onChange={this.updateInputValue} />
        <button className='btn btn-success' onClick={this.sendData}>Find</button>
      </div>
      )
    }
};

export default Filter;
