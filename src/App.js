  import React from "react";
// import './App.css';
import Cart from "./Cart";
import Navbar from './NavBar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: []
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  // Increasing Quantity
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      // products:products
      products
    })
  }

  // Decreasing Quantity
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    } else {
      products[index].qty -= 1;
    }

    this.setState({
      // products:products
      products
    })
  }

  // Deleating Products
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items
    })
  }


  getCartCount = () => {
    const { products } = this.state;

    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  getCartTotal = () =>{
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    });
    return cartTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fontSize:20,padding:10,fontWeight:"bold"}}>TOTAL:{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
