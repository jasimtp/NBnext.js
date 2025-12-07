"use client"
import React from "react";
import Link from "next/link";
import "../app/components/Home.css";

export default function Home() {
  const products = [
    { id: 1, name: "Urban Leather Boots", price: 2499, img: "https://t4.ftcdn.net/jpg/02/11/11/15/360_F_211111574_VLtzH6ORhebXvnJXjlkAkaUuAftnvmJH.jpg" },
    { id: 2, name: "Classic Brown Boots", price: 1999, img: "https://m.media-amazon.com/images/I/61evdw34eeL._AC_UY1000_.jpg" },
    { id: 3, name: "Black Premium Boots", price: 2799, img: "https://www.saintg.in/cdn/shop/files/Untitled-3.7_1800x1800.jpg?v=1748930965" },
    { id: 4, name: "Winter Grip Boots", price: 2999, img: "https://m.media-amazon.com/images/I/61evdw34eeL._AC_UY1000_.jpg" },
        { id: 5, name: "Winter Grip Boots", price: 2999, img: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxh9dMcIZjf_lMLwQW5pOlg7V2biyJkLDCUA&s" },
         { id: 6, name: "Urban Leather Boots", price: 2499, img: "https://t4.ftcdn.net/jpg/02/11/11/15/360_F_211111574_VLtzH6ORhebXvnJXjlkAkaUuAftnvmJH.jpg" },
    { id: 7, name: "Classic Brown Boots", price: 1999, img: "https://www.shutterstock.com/image-photo/vintage-red-shoes-on-white-260nw-92008067.jpg" },

  ];

  return (
    <div className="container">


    

      <div className="content-area">
        {/* Hero Section */}
        <section className="hero">
          <h1>Premium Boots Collection</h1>
          {/* <p>Step into style with the latest boot designs</p> */}
          <Link href="/allProducts">
          <button>Shop Now</button>
          </Link>
        </section>
      <h2 style={{  font:" italic small-caps bold 25px/50px Georgia, serif"}}>Shoes/Boots</h2>
      <hr></hr>
        {/* Product Grid */}
        <section className="product-grid">
          {products.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.img} alt={item.name} />
              <h2>{item.name}</h2>
              <p>₹{item.price}</p>
              {/* <button>Add to Cart</button> */}
            </div>
            
          ))}
  
        </section>
        <hr></hr>
   
      </div>

     
    </div>
  );
}
