"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../login/Login.css";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // LOGIN CHECK  
    if (form.email === "jasim" && form.password === "1234") {
      // Set cookies
      document.cookie = `token=valid; path=/;`;
      document.cookie = `username=${form.email}; path=/;`;

      // Clear form
      setForm({ email: "", password: "" });

      // Redirect home
      router.push("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-logo">
          <img src="/BrandLogo.png" alt="Logo" />
        </div>

        <h2>Welcome Back</h2>
        <p className="sub-text">Login to continue shopping</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email / Username</label>
            <input
              type="text"
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
