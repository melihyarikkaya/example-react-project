import React, { Component } from 'react';

export default class Loading extends Component {
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this._setIsloading();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  _setIsloading() {
    this.props.setIsloading(!this.props.isLoading);
  }

  render() {
    return (
      <div>
        <h3>Loading State = {this.props.isLoading ? 'TRUE' : 'FALSE'}</h3>
      </div>
    );
  }
}
