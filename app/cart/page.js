"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../redux/cartSlice";
import "./page.css";
import Link from "next/link";


export default function CartPage() {
  const items = useSelector((state) => state.cart.items || []);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  // Auto delivery date (next 5 days)
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 5);
  const formattedDate = deliveryDate.toDateString();

  return (
    <div className="cart-wrapper">

      {/* LEFT CART ITEMS SECTION */}
      <div className="cart-left">

        {items.length === 0 && <p className="empty-cart">Your cart is empty</p>}

        {items.map((item) => (
          <div key={item.id} className="cart-card">
            <img className="cart-img" src={item.thumbnail || item.image || item.images?.[0]}
              alt={item.title} />

            <div className="cart-details">
              <h4 className="cart-item-title">{item.title}</h4>
              <p className="cart-price">${item.price}</p>

              <div className="qty-box">
                <button
                  className="qty-btn"
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                  }
                  disabled={item.quantity <= 1}
                >
                  -
                </button>

                <span className="qty-number">{item.quantity}</span>

                <button
                  className="qty-btn"
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                  }
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE SUMMARY BOX */}
      {items.length > 0 && (
        <div className="cart-summary">
          <h3>Order Summary</h3>

          <div className="summary-row">
            <p className="summary-title">Delivery Address:</p>
            <p className="summary-value">Kochi, Kerala, India</p>
          </div>

          <div className="summary-row">
            <p className="summary-title">Delivery Date:</p>
            <p className="summary-value">{formattedDate}</p>
          </div>

          <div className="summary-row">
            <p className="summary-title">Total Amount:</p>
            <p className="summary-total">${total.toFixed(2)}</p>
          </div>

          <button className="buy-btn"onClick={() => dispatch(clearCart())}>
            clearCart
          </button>
          <Link href="/buynow">
            <button className="clear-btn" >
            BUY NOW
          </button>
          </Link>
        </div>
      )}
    </div>
  );
}
