import React from "react";
// import './App.css';
import Cart from "./Cart";
import Navbar from './NavBar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Mobile Phone",
          qty: 1,
          img: "",
          id: 1
        },
        {
          price: 1999,
          title: "Smart Watch",
          qty: 1,
          img: "",
          id: 2
        },
        {
          price: 9999,
          title: "Leptop",
          qty: 1,
          img: "",
          id: 3
        },
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img: "",
          id: 4
        }
      ]
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

  render() {
    const { products } = this.state;
    return (
      <>
        <Navbar count = {this.getCartCount()}/>
        <Cart
          products = { products }
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {/* <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart /> */
        }
      </>
    );
  }
}

export default App;
