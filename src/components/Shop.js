import React, {Component} from 'react';
import GroceryItem from "./GroceryItem";
import BasketItem from "./BasketItem";
import "./Shop.css";

const IN_SHOP = ["Strawberry", "Bluberry", "Banana", "Blackberry", "Apricot", 
  "Peach", "Celery", "Elderberry", "Elven bread", "African swallow", 
  "European swallow"];

class Shop extends Component{
  constructor(props){
    super(props);

    this.state = {
      itemsInBasket: []
    };
  }

  addToBasket = (grocery) => {
    this.setState((prevState) => {
      let tmpItems = [...prevState.itemsInBasket];
      let alreadyAdded = tmpItems.find((item) => 
          item.label === grocery
        );

      if(alreadyAdded)
        alreadyAdded.amount++;

      else
      {
        let selectedItem = {
          label: grocery,
          amount: 1
        }
        tmpItems.push(selectedItem);
      }

      return {itemsInBasket: tmpItems};
    });
  }

  removeFromBasket = (grocery) => {
    this.setState((prevState) => {
      let tmpItems = [...prevState.itemsInBasket];
      let selectedItem = tmpItems.find((item) =>
        item.label === grocery
      )

      selectedItem.amount--;
      if(selectedItem.amount === 0){
        tmpItems = tmpItems.filter((item) => 
          item.label !== grocery 
        )
      }

      return {itemsInBasket: tmpItems};
    })
  }

  emptyBasket = () => {
    this.setState({itemsInBasket: []});
  }

  render() {
    return (
      <div className="GroceryLists">
        <div className="Items">
          <h2 className="GroceriesTitle">Groceries</h2>
          <ul>
            {IN_SHOP.map((selectedItem, index) =>
              <GroceryItem key={index} className={index % 2 ? "BackgroundGrey" : "BackgroundLightTeal"}
              onChange={(selectedItem) => this.addToBasket(selectedItem)} label={selectedItem}/>
            )}
          </ul>
        </div>

        <div className="Items">
          <div className="BasketTitle">
              <h2>Basket</h2>
              <button onClick={() => this.emptyBasket()} className="EmptyBasketButton">Empty basket</button>
          </div>
          <ul>
              {this.state.itemsInBasket.map((selectedItem, index) =>
                <BasketItem key={index} className={index % 2 ? "BackgroundGrey" : "BackgroundLightTeal"} 
                  onChange={(selectedItem) => this.removeFromBasket(selectedItem)}
                  amount={selectedItem.amount} label={selectedItem.label}/>  
              )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Shop;