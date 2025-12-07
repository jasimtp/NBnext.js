// components/Navbar.jsx
"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./Header.css";

export default function Navbar() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mainheader">
      <div className="navbar">
        <header className="container d-flex align-items-center justify-content-between">

          <div className="logo">
            <img style={{ width: "60px" }} src="/BrandLogo.png" />
          </div>

          {/* Search Box */}
          <div className="search-box">
            <input type="text" placeholder="Search products..." />
            <button>Search</button>
          </div>

          {/* HAMBURGER ICON (Mobile) */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={menuOpen ? "bar open" : "bar"}></span>
            <span className={menuOpen ? "bar open" : "bar"}></span>
            <span className={menuOpen ? "bar open" : "bar"}></span>
          </div>

          {/* NAV LINKS */}
          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <Link href="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/allProducts" onClick={() => setMenuOpen(false)}>Products</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            <Link href="/cart" className="cart-icon" onClick={() => setMenuOpen(false)}>
              🛒 <span className="cart-badge">{cartCount}</span>
            </Link>
          </nav>

        </header>
      </div>
    </div>
  );
}
