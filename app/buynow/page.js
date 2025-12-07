"use client";

import { useRouter } from "next/navigation";
import "./page.css";

export default function BuyNowForm() {
  const router = useRouter();

  return (
    <div className="checkout-container">
      
      {/* BACK BUTTON */}
      <button  className="back-btn" onClick={() => router.back()}>
        ← 
      </button>

      <h2 className="checkout-title">Buy Now</h2>
      <hr></hr>

      <div className="form-box">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" />

        <label>Mobile Number</label>
        <input type="number" placeholder="Enter mobile number" />

        <label>Address</label>
        <textarea rows={3} placeholder="House no, street, area..." />

        <label>Landmark</label>
        <input type="text" placeholder="Enter landmark" />

        <label>Pincode</label>
        <input type="number" placeholder="Enter pincode" />

        <label>Payment Method</label>
        <div className="payment-options">
          <label><input type="radio" name="pay" /> Cash on Delivery</label>
          <label><input type="radio" name="pay" /> UPI</label>
          <label><input type="radio" name="pay" /> Card</label>
        </div>

        <button className="place-order-btn">Place Order</button>
      </div>
    </div>
  );
}
