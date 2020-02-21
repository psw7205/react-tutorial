import React, { Component } from "react";

class Hello extends Component {
  static defaultProps = {
    name: "default props"
  };
  render() {
    const { color, flag, name } = this.props;

    return (
      <div style={{ color }}>
        {flag && <strong>*</strong>}
        Hello {name}
      </div>
    );
  }
}

export default Hello;
