"use client";
function Footer() {
  return (
    <>
      <footer style={{backgroundColor:"	#36454F"}} className=" text-light pt-5 pb-4">
        <div className=" p-5">
          <div className="row">

            {/* Logo & Description */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h4 className="text-uppercase mb-3">ShopEase</h4>
              <p>Your one-stop online store for the best deals on fashion, electronics & more.</p>
            </div>

            {/* Quick Links */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h5 className="mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">Home</a></li>
                <li><a href="#" className="text-light text-decoration-none">Shop</a></li>
                <li><a href="#" className="text-light text-decoration-none">Cart</a></li>
                <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
              </ul>
            </div>

            {/* Customer Support */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h5 className="mb-3">Customer Support</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light text-decoration-none">FAQ</a></li>
                <li><a href="#" className="text-light text-decoration-none">Shipping Info</a></li>
                <li><a href="#" className="text-light text-decoration-none">Return Policy</a></li>
                <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-3 col-sm-6 mb-4">
              <h5 className="mb-3">Contact Us</h5>
              <p>Email: support@shopease.com</p>
              <p>Phone: +91 98765 43210</p>

              <div className="d-flex gap-3 mt-2">
                <i className="bi bi-facebook fs-4"></i>
                <i className="bi bi-instagram fs-4"></i>
                <i className="bi bi-twitter fs-4"></i>
                <i className="bi bi-youtube fs-4"></i>
              </div>
            </div>

          </div>

          <hr className="border border-light" />

          <div className="text-center mt-3">
            <p className="mb-0">&copy; 2025 ShopEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
