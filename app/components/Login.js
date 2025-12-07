"use client";
import Link from "next/link";
import "./login.css";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", form);
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-logo">
          <img src="/BrandLogo.png" alt="Logo" />
        </div>

        <h2>Welcome Back</h2>
        <p className="sub-text">Login to continue shopping</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="register-text">
          Don’t have an account? <Link href="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
