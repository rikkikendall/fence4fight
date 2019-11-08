import React, { Component } from 'react';

class AnimatedNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0
    };
  }
  fetchPrice() {
    this.setState({
      price: Math.floor(Math.random() * 100) + 1
    })
  }
  componentDidMount() {
    setInterval(() => {
      this.fetchPrice();
    }, 2000);
  }
  round(value) {
    if (value) {
      return parseFloat(Math.round(value * 100) / 100).toFixed(2);
    }
    return 0;
  }
  render() {
    return (
      <div className="App">
          <p> Animated Number Below: </p>
          <h1 className="App-Title">
            <AnimatedNumber component="text" value={this.state.price}
                style={{
                    transition: '0.8s ease-out',
                    fontSize: 48,
                    transitionProperty:
                        'background-color, color, opacity'
                }}
                frameStyle={perc => (
                    perc === 100 ? {} : {backgroundColor: '#ffeb3b'}
                )}
                duration={300}
                formatValue={n => this.round(n)}/>
          </h1>
      </div>
    );
  }
}

export default AnimatedNumber;

export {
  AnimatedNumber,
};
