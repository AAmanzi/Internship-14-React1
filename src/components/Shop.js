import React, {Component} from 'react';
import Grocery from "./Grocery";
import "./Shop.css";

const IN_SHOP = ["Strawberry", "Bluberry", "Banana", "Blackberry", "Apricot", 
  "Peach", "Celery", "Elderberry", "Elven bread", "African swallow", 
  "European swallow"];

class Shop extends Component{
  constructor(props){
    super(props);

    this.state = {
      inBasket: []
    };
  }

  addToBasket = (grocery) => {
    this.setState((prevState) => {
      let tmpState = prevState;
      let alreadyAdded = tmpState.inBasket.find((item) => 
          item.label === grocery
        );

      if(alreadyAdded)
        alreadyAdded.amount++;

      else
      {
        let groceryItem = {
          label: grocery,
          amount: 1
        }
        tmpState.inBasket.push(groceryItem);
      }

      return tmpState;
    });
  }

  removeFromBasket = (grocery) => {
    this.setState((prevState) => {
      let tmpState = prevState;
      let groceryItem = tmpState.inBasket.find((item) =>
        item.label === grocery
      )

      groceryItem.amount--;
      if(groceryItem.amount === 0){
        tmpState.inBasket = tmpState.inBasket.filter((item) => 
          item.label !== grocery 
        )
      }

      return tmpState;
    })
  }

  deleteBasket = () => {
    this.setState({inBasket: []});
  }

  render() {
    return (
      <div className="GroceryLists">
        <div className="Items">
          <h2 className="GroceriesTitle">Groceries</h2>
          <ul>
            {IN_SHOP.map((groceryItem, index) =>
              <Grocery key={index} className={index % 2 ? "BackgroundGrey" : ""}
              onChange={(groceryItem) => this.addToBasket(groceryItem)} label={groceryItem}/>
            )}
          </ul>
        </div>

        <div className="Items">
          <div className="BasketTitle">
              <h2>Basket</h2>
              <button onClick={() => this.deleteBasket()} className="DeleteButton">Empty basket</button>
          </div>
          <ul>
              {this.state.inBasket.map((groceryItem, index) =>
                <Grocery key={index} className={index % 2 ? "" : "BackgroundGrey"} 
                  onChange={(groceryItem) => this.removeFromBasket(groceryItem)}
                  amount={groceryItem.amount} label={groceryItem.label} isBasketItem={true}/>  
              )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Shop;