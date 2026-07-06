import { useNavigate } from "react-router-dom";

function BillingPage({ cartItems }) {
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const platformFee = 12;
  const gst = 14;
  const grandTotal = subtotal + platformFee + gst;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">

      {/* CARD */}
      <div className="w-full max-w-xl bg-gradient-to-b from-[#1a1a1a] to-[#111] 
      border border-gray-800 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.7)]">

        {/* TITLE */}
        <h2 className="text-2xl font-serif mb-6 text-center">
          Bill Summary
        </h2>

        {/* ITEMS */}
        <div className="space-y-2 mb-6">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between text-gray-300">
              <p>{item.name}</p>
              <p>₹{item.price}</p>
            </div>
          ))}
        </div>

        <hr className="border-gray-700 mb-4" />

        {/* SUMMARY */}
        <div className="space-y-2 text-gray-300">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹{subtotal}</p>
          </div>

          <div className="flex justify-between">
            <p>Platform Fee</p>
            <p>₹{platformFee}</p>
          </div>

          <div className="flex justify-between">
            <p>GST</p>
            <p>₹{gst}</p>
          </div>
        </div>

        <hr className="border-gray-700 my-4" />

        {/* GRAND TOTAL */}
        <div className="flex justify-between text-lg font-semibold mb-6">
          <p>Grand Total</p>
          <p className="text-[#D97745] text-xl font-bold">
            ₹{grandTotal}
          </p>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/thankyou")}
          className="w-full bg-[#D97745] text-white py-3 rounded-full font-semibold 
          hover:bg-[#c4683c] transition 
          shadow-[0_0_20px_rgba(217,119,69,0.4)]"
        >
          Place Order →
        </button>

      </div>
    </div>
  );
}

export default BillingPage;