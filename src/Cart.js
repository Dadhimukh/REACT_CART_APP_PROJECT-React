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
  render() {
    const { products } = this.state;
    return (
      <div className='cart'>
        {products.map((product) => {
          return <CartItem product={product} />
        })}

      </div>

    );

  };
}




export default Cart;
