import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props){
    super(props);
    this.state = {
      hovered: false,
      clicked: false
    };
  }

  render() {
    var { title } = this.props;

    return (
      <button className="btn">
      { title }
      </button>
    );
  }
}