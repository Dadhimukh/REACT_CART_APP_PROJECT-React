import React from "react";
import { firestore } from "./firebase";

// import './App.css';
import Cart from "./Cart";
import Navbar from "./NavBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  componentDidMount() {
    //fetching all the products from the cloud firestore
    firestore
      //query for fecthing the product which we want as per our query
      .collection("porducts") //getting all the products
      // .where('price','>=', 999) // after fetching db we should write query
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });

        this.setState({
          products: products,
          loading: false,
        });
      });
  }

  // Increasing Quantity
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      // products:products
      products,
    });
  };

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
      products,
    });
  };

  // Deleating Products
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;
    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
    });
    return cartTotal;
  };

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
        <div style={{ fontSize: 20, padding: 10, fontWeight: "bold" }}>
          TOTAL:{this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
