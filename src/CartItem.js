import React from 'react';

class CartItem extends React.Component {
      
      // // increasingQuantity Function
      // increaseQuantity = () => {
      //       // this.state.qty += 1;
      //       // console.log('this' , this.state);
      //       // setting state==================================> Way 1======> if previous State is not required then use this
      //       // this.setState({
      //       //      qty : this.state.qty + 1;
      //       // });

      //       // setting state==================================> Way 2======> if previous State is required then use this
      //       this.setState((prevState) => {
      //             return {
      //                   qty: prevState.qty + 1,
      //             }
      //       });
      // }


      // // decreasingQuantity Function
      // decreaseQuantity = () => {
      //       const { qty } = this.state;
      //       if (qty === 0) {
      //             return;
      //       }
      //       this.setState((prevState) => {
      //             return {
      //                   qty: prevState.qty - 1
      //             }
      //       });
      // }

      render() {
            const { price, title, qty } = this.props.product;
            const {product, onIncreaseQuantity, onDecreaseQuantity} = this.props;
            return (
                  <div className='cart-item'>
                        <div className='left-block'>
                              <img style={styles.image} />
                        </div>
                        <div className='right-block'>
                              <div style={{ fontSize: 25 }}>{title}</div>
                              <div style={{ color: '#777' }}>Rs {price}</div>
                              <div style={{ color: '#777' }}>Qty {qty}</div>
                              <div className='cart-item-action'>
                                    {/* Buttons */}
                                    <img
                                          alt="increase"
                                          className='action-icons'
                                          src='https://cdn-icons-png.flaticon.com/128/1828/1828919.png'
                                          onClick={ () => onIncreaseQuantity(product)}
                                    />

                                    <img
                                          alt="decrease"
                                          className='action-icons'
                                          src='https://cdn-icons-png.flaticon.com/128/1828/1828899.png'
                                          onClick={ () => onDecreaseQuantity(product)}
                                    />

                                    <img
                                          alt="delete"
                                          className='action-icons'
                                          src='https://cdn-icons-png.flaticon.com/128/9068/9068885.png'
                                    />
                              </div>
                        </div>
                  </div>
            )
      }
}

const styles = {
      image: {
            height: 120,
            width: 110,
            borderRadius: 4,
            background: '#ccc',
      }
}

export default CartItem;
