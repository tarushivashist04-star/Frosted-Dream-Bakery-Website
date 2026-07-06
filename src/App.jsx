import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Special from "./components/Special";
import Footer from "./components/Footer";

// Pages
import CartPage from "./pages/CartPage";
import BillingPage from "./pages/BillingPage";
import ThankYou from "./pages/ThankYou";
import Profile from "./pages/Profile";
import About from "./pages/About"; // ✅ ADDED

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const handleRemove = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <Navbar cartItems={cartItems} />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ProductGrid onAddToCart={handleAddToCart} />
              <Special onAddToCart={handleAddToCart} />
              <Footer />
            </>
          }
        />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        <Route path="/profile" element={<Profile />} />

        <Route
          path="/cart"
          element={
            <CartPage cartItems={cartItems} onRemove={handleRemove} />
          }
        />

        <Route
          path="/billing"
          element={<BillingPage cartItems={cartItems} />}
        />

        {/* ✅ UPDATED HERE */}
        <Route path="/thankyou" element={<ThankYou setCartItems={setCartItems} />} />

      </Routes>
    </>
  );
}

export default App;