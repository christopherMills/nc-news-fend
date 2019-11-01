import React, { Component } from 'react';

export default class ErrorHandler extends Component {
  state = {
    errorStatusCode: undefined,
    errorMsg: undefined,
  };
  componentDidMount = () => {
    this.setState({
      errorStatusCode: this.props.statusCode,
      errorMsg: this.props.errorMsg,
    });
  };
  render() {
    const { errorStatusCode, errorMsg } = this.state;
    return (
      <>
        <h1>Error (status code {errorStatusCode})</h1>
        <p>{`Message from server: ${errorMsg}`}</p>
      </>
    );
  }
}
