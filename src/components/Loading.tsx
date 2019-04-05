import React, { Component } from 'react';

export interface LoadingStatic {
  setIsLoading(status: boolean): void;
  isLoading: boolean;
}

class Loading extends Component<LoadingStatic> {
  _setIsloading = () => {
    this.props.setIsLoading(!this.props.isLoading);
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
