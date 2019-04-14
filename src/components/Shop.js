import React, {Component} from 'react';
import Grocery from "./Grocery";
import "./Shop.css";

const START_STATE = {
  inShop: ["Strawberry", "Bluberry", "Banana", "Ebonyberry", "Apricot", 
    "Peach", "Celery", "Elderflower", "Elven bread", "African swallow", 
    "European swallow"],
  inBasket: []
}

class Shop extends Component{
  constructor(props){
    super(props);

    this.state = START_STATE;
  }

  addToBasket = (grocery) => {
    this.setState((prevState) => {
      let tmpState = prevState;
      let groceryAmount = 1;
      let alreadyAdded = tmpState.inBasket.find((item) => 
          item.label === grocery
        );

      if(alreadyAdded)
        {
          groceryAmount += alreadyAdded.amount; 
          tmpState.inBasket = tmpState.inBasket.filter((item) => 
            item.label !== grocery
          );
        }

      let groceryItem = {
        label: grocery,
        amount: groceryAmount
      }
      tmpState.inBasket.push(groceryItem);

      return tmpState;
    });
  }

  render() {
    return (
      <div className="GroceryLists">
        <ul>
          {this.state.inShop.map((groceryItem) =>
            <Grocery onChange={(groceryItem) => this.addToBasket(groceryItem)} 
            label={groceryItem}/>
          )}
        </ul>


        <ul>
            {this.state.inBasket.map((groceryItem) =>
              <Grocery amount={groceryItem.amount} label={groceryItem.label} isBasketItem={true}/>  
            )}
        </ul>
      </div>
    );
  }
}

export default Shop;