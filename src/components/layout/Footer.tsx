const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <h3 className="font-bold">My Account</h3>
          <ul>
            <li>Profile</li>
            <li>Orders</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Shopping</h3>
          <ul>
            <li>Categories</li>
            <li>Top Products</li>
            <li>Deals</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Policy</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Help</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Social Media</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;