import React, { Component } from 'react';

class ColorPreviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomColor: "#ffffff"
    }
  }

  handleGenerateRandom = () => {
    const RANDOMCOLOR = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.setState({ randomColor: RANDOMCOLOR })
  }

  render() { 
    let styles = {
      backgroundColor: this.state.randomColor
    };
    return (
      <React.Fragment>
        <p className="color-ref">{this.state.randomColor.toUpperCase()}</p>
        <div style={styles} className="color-previewer"></div>
        <button className="btn__random" onClick={this.handleGenerateRandom}>Give me a new random color</button>
      </React.Fragment>
    );
  }
}
 
export default ColorPreviewer;