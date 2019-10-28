import React from 'react';

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black'
];

class Navbar extends React.Component {
  constructor(props) {
    console.log(props)
    super(props);

    this.state = {
      color: 'red'
    }

    this.handleChangeClick = this.handleChangeClick.bind(this)
  }

  // TODO: give some state to this app! Only after working with props though!
  handleChangeClick() {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    // console.log('`this` within handleChangeClick', this);
    // TOTALLY WAY WAY WRONG : (
    // this.props.color = newColor;
    // ALSO TOTALLY WRONG
    // (can't destructively modify state)
    // this.state.color = newColor
    this.setState((prevState, prevProps) => {
      console.log(prevState, prevProps)
      return { color: newColor }
    });
  }

  render() {
    // console.log("Navbar is rendering; what's `this`?", this);
    return (
      <div className={`ui inverted ${this.state.color} menu`}>
        <a className="item">
          <h2 className="ui header">
            <i className={`${this.props.icon} icon`} />
            <div className="content">{this.props.title}</div>
            <div className="sub header">{this.props.description}</div>
          </h2>
        </a>
        <div className="right aligned item">
          <div onClick={this.handleChangeClick} className="ui floated button">
            Change Color
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
