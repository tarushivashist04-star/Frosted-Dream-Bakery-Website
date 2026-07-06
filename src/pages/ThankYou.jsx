import { useEffect } from "react";

function ThankYou({ setCartItems }) {

  // ✅ CLEAR CART WHEN PAGE LOADS
  useEffect(() => {
    setCartItems([]);
  }, [setCartItems]);

  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center relative text-white"
      style={{
        backgroundImage: "url('/Images/Thankyou.jpg')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold">
          Thank You for Ordering!
        </h1>
        <p className="mt-2">Your order has been placed successfully.</p>
      </div>
    </div>
  );
}

export default ThankYou;