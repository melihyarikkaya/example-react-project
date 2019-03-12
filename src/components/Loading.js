import React, { Component } from 'react';

class Loading extends Component {
  _setIsloading = () => {
    this.props.setIsloading(!this.props.isLoading);
  };

  render() {
    return (
      <div>
        <h3>
          isLoading State = <span className="state">{this.props.isLoading ? 'TRUE' : 'FALSE'}</span>
        </h3>
        <br />
        <button onClick={this._setIsloading}>
          Set isLoading to {!this.props.isLoading ? 'TRUE' : 'FALSE'}
        </button>
      </div>
    );
  }
}

export default Loading;
