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
          img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1800&q=60",
          id: 1
        },
        {
          price: 1999,
          title: "Smart Watch",
          qty: 1,
          img: "https://images.unsplash.com/photo-1542541864-4abf21a55761?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1800&q=60",
          id: 2
        },
        {
          price: 9999,
          title: "Leptop",
          qty: 1,
          img: "https://media.istockphoto.com/id/95342772/photo/silver-leptop-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=zF9W2r1xwrq417UGjwq78y7h8qglYB-oedqa6g8F1RI=",
          id: 3
        },
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1800&q=60",
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
