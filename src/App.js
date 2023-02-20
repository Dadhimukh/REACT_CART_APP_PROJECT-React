import React from "react";
import { firestore } from "./firebase";
import Cart from "./Cart";
import Navbar from "./NavBar";


const db = firestore;


// import './App.css';


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
    db
      //query for fecthing the product which we want as per our query
      .collection("products") //getting all the products
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
    // products[index].qty += 1;
    // this.setState({
    //   // products:products
    //   products,
    // });

    const docRef = db.collection("products").doc(products[index].id);

    docRef.update({
      qty: products[index].qty + 1
    })
    .then(()=>{
      console.log("Updated successfully")
    })
    .catch((err)=>{
      console.log("Error " , err);
    })
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

  // Adding Product in FireBase
  addProduct = () => {
    db.collection("products")
      .add({
        img: "",
        price: 99,
        qty: 4,
        title: "TV",
      })
      .then((docRef) => {
        console.log("product has been added ", docRef);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        {/* <button onClick={this.addProduct}>Add Product</button> */}
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
