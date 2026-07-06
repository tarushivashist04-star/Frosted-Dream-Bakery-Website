import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";

function CartPage({ cartItems, onRemove }) {
  const navigate = useNavigate();

  // 🧠 GROUP ITEMS FOR QUANTITY
  const groupedItems = cartItems.reduce((acc, item) => {
    const existing = acc.find((i) => i.name === item.name);
    if (existing) {
      existing.quantity += 1;
      existing.total += item.price;
    } else {
      acc.push({
        ...item,
        quantity: 1,
        total: item.price,
      });
    }
    return acc;
  }, []);

  const subtotal = groupedItems.reduce((sum, item) => sum + item.total, 0);

  const platformFee = 12;
  const gst = 14;
  const grandTotal = subtotal + platformFee + gst;

  return (
    <div
      className="min-h-screen pt-24 px-10 text-white bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/Images/Cart.jpg')",
      }}
    >
      {/* ✅ OVERLAY ADDED */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* ✅ WRAP YOUR EXISTING CODE */}
      <div className="relative z-10">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-3xl font-serif">Your Cart</h1>
          <span className="bg-[#D97745]/20 text-[#D97745] px-3 py-1 rounded-full text-sm">
            {cartItems.length} items
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="md:col-span-2 space-y-5">

            {groupedItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-xl bg-black/60 border border-gray-800"
              >
                {/* IMAGE */}
                <img
                  src={encodeURI(item.image)}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>

                  <p className="text-[#D97745] font-semibold">
                    ₹{item.price} x {item.quantity}
                  </p>

                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col justify-between items-end">
                  <p className="font-semibold">₹{item.total}</p>

                  <Trash2
                    onClick={() => onRemove(index)}
                    className="text-red-500 cursor-pointer hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-black/60 p-6 rounded-xl border border-gray-800 h-fit">
            <h2 className="text-xl font-serif mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <p className="text-gray-400">Subtotal</p>
              <p>₹{subtotal}</p>
            </div>

            <div className="flex justify-between mb-2">
              <p className="text-gray-400">Platform Fee</p>
              <p>₹12</p>
            </div>

            <div className="flex justify-between mb-4">
              <p className="text-gray-400">GST (Taxes)</p>
              <p>₹14</p>
            </div>

            <hr className="border-gray-700 mb-4" />

            <div className="flex justify-between text-lg font-semibold mb-4">
              <p>Grand Total</p>
              <p className="text-[#D97745]">₹{grandTotal}</p>
            </div>

            <button
              onClick={() => navigate("/billing")}
              className="w-full bg-[#D97745] text-white py-3 rounded-full font-semibold hover:bg-[#c4683c] transition shadow-lg"
            >
              Place Order →
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default CartPage;