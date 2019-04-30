import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {//created the main class component. Inside defined the constructor with the props.
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
 
    return (
        <Menu dishes={this.state.dishes} />//this.state.dishes supplied as props.
    );
  }
}
  
export default Main;