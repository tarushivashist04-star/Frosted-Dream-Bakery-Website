const Order = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const gst = 18;
  const finalTotal = total + gst;

  return (
    <div className="min-h-screen bg-stone-950 text-white p-8">

      <h1 className="text-3xl mb-6 font-bold">Your Order</h1>

      <p className="mb-4">Items: {cartItems.length}</p>

      {/* Item List */}
      <div className="space-y-3 mb-6">
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between border-b pb-2">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="space-y-2 text-lg">
        <p>Total: ₹{total}</p>
        <p>GST: ₹{gst}</p>
        <p className="font-bold text-bakery-orange">
          Final: ₹{finalTotal}
        </p>
      </div>

    </div>
  );
};

export default Order;