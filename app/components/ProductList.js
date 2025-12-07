"use client";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Link from "next/link";
import styles from "./ProductList.module.css";  // ⭐ IMPORT MODULE CSS
import { useState } from "react";

export default function ProductList({ products }) {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className={styles.productLayout}>
      
      {/* SIDEBAR */}
      <div className={styles.sidebar}>
        <h3 className={styles.sideTitle}>Categories</h3>

        <ul className={styles.categoryList}>
          {categories.map((cat) => (
            <li
              key={cat}
              className={`${styles.categoryItem} ${
                selectedCategory === cat ? styles.active : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>

      {/* PRODUCT LIST */}
      <div style={{ flex: 1 }}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.productRow}>
            <div className={styles.leftBox}>
              
              <Link href={`/products/${product.id}`}>
                <img
                  src={
                    product.thumbnail || product.image || product.images?.[0]
                  }
                  alt={product.title}
                  className={styles.productImg}
                />
              </Link>

              <div className={styles.btnGroup}>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className={styles.cartBtn}
                >
                  Add to Cart
                </button>

                <Link href="/buynow">
                  <button className={styles.buyBtn}>Buy Now</button>
                </Link>
              </div>
            </div>

            <div className={styles.productInfo}>
              <h3 className={styles.title}>{product.title}</h3>
              <p className={styles.desc}>{product.description}</p>

              <div className={styles.middleBottom}>
                <p className={styles.price}>${product.price}</p>

                <div className={styles.ratingBox}>
                  ⭐ {product.rating?.rate || product.rating} / 5
                  <br />
                  <span className={styles.count}>
                    {product.rating?.count || 120} reviews
                  </span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
