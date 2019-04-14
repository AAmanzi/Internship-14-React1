import React, {Component} from 'react';

class Grocery extends Component{
  constructor(props){
    super(props);
  }
  
  handleChange = () => {
    this.props.onChange(this.props.label)
  }
  render(){
    return(
      <li>
        <span onClick={this.handleChange.bind(this)}>{this.props.isBasketItem ? "-" : "+"}</span>
        {this.props.isBasketItem ? this.props.amount : ""}
        {this.props.label}
      </li>
    )
  }
}

export default Grocery;