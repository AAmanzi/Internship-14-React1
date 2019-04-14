import React, {Component} from 'react';
import "./Grocery.css"

class Grocery extends Component{
  constructor(props){
    super(props);

    this.state = {
      isDeleted: false
    }
  }
  
  handleChange = () => {
    this.props.onChange(this.props.label)
  }

  toggleDelete = () => {
    if(!this.props.isBasketItem)
      return;
    this.setState((prevState) => {
      let tmpState = prevState;
      tmpState.isDeleted = !prevState.isDeleted;

      return tmpState;
    })
  }

  render(){
    return(
      <li>
        <span onClick={this.handleChange.bind(this)}>{this.props.isBasketItem ? "-" : "+"}</span>
        <div className={this.state.isDeleted ? "Deleted" : ""} 
          onClick={() => this.toggleDelete()}>
          {this.props.isBasketItem ? this.props.amount : ""}
          {this.props.label}
        </div>
      </li>
    )
  }
}

export default Grocery;