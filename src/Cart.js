import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
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
  handleDecreaseQuantity  = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0){
      return;
    }else{
      products[index].qty -= 1;
    }
    this.setState({
      // products:products
      products
    })
  }


  render() {
    const { products } = this.state;
    return (
      <div className='cart'>
        {products.map((product) => {
          return ( 
            <CartItem 
              product = { product }
              key = { product.id }
              onIncreaseQuantity = { this.handleIncreaseQuantity }
              onDecreaseQuantity = { this.handleDecreaseQuantity }
            />
          )
        })}

      </div>

    );

  };
}




export default Cart;
