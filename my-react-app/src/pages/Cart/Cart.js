import React from "react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container my-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                <div>
                  <h5>{item.name}</h5>
                  <p>Qty: {item.quantity} | Price: ₹{item.price}</p>
                </div>
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h4>Total: ₹{total}</h4>

          <button className="btn btn-secondary me-2" onClick={clearCart}>Clear Cart</button>

          <hr />

          <h3>Checkout</h3>
          <form>
            <div className="mb-3">
              <label>Name</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label>Address</label>
              <textarea className="form-control" required></textarea>
            </div>
            <div className="mb-3">
              <label>Card Info</label>
              <input type="text" className="form-control" placeholder="XXXX-XXXX-XXXX-XXXX" required />
            </div>
            <button className="btn btn-success">Place Order</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Cart;
