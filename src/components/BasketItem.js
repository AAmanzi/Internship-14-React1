import React, {Component} from 'react';
import "./BasketItem.css"

class BasketItem extends Component{
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
    this.setState((prevState) => {
      return {isDeleted: !prevState.isDeleted};
    })
  }

  render(){
    return(
      <li className={this.props.className}>
        <span className="RemoveItemButton"
          onClick={this.handleChange.bind(this)}>
          -
        </span>
        <div className={this.state.isDeleted ? "Deleted" : ""} 
          onClick={() => this.toggleDelete()}>
          <span className="BasketItemAmount">{this.props.amount}</span>
          {this.props.label}
        </div>
      </li>
    )
  }
}

export default BasketItem;