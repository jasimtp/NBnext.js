"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Link from "next/link";
import "./ProductDetails.css";



export default function ProductDetails({ product }) {
  const dispatch = useDispatch();

   const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  const formattedDate = deliveryDate.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
   

    <div className="details-container">


      {/* Back Button */}
      <Link href="/allProducts">
      <button className="back-btn" >
        ← 
      </button>
</Link>
   
      <div className="details-card">

        {/* LEFT IMAGE */}
        <div className="details-left">
          <img  src={product.thumbnail || product.image || product.images?.[0]}
              alt={product.title} className="details-img" />
        </div>

        {/* RIGHT SIDE */}
        <div className="details-right">
          <h2 className="details-title">{product.title}</h2>

          <p className="details-category">
            <b>Category:</b> {product.category}
          </p>

          <p className="details-description">{product.description}</p>

          <h3 className="details-price">₹ {product.price}</h3>

          {/* DELIVERY INFO */}
          <div className="delivery-box">
            <div className="delivery-item">
              <span className="location-icon">📍</span>
              <span className="delivery-text">Deliver to: <b>Your Location</b></span>
            </div>

            <div className="delivery-item">
              <span className="truck-icon">🚚</span>
              <span className="delivery-text">Expected Delivery: <b>{formattedDate}</b></span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="btn-box">
            <button className="cart-btn"onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            <Link href="/buynow">
            <button className="buy-btn">Buy Now</button>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
