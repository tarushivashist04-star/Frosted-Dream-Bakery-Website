const Order = ({ cartItems = [], onRemoveItem = () => {} }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);
  const gst = 18;
  const final = total + gst;

  return (
    <div className="min-h-screen bg-stone-950 text-white p-8">

      <h1 className="text-3xl mb-6">Your Order</h1>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="flex justify-between bg-stone-900 p-4 mb-3 rounded">
            <span>{item.name}</span>
            <span>₹{item.price}</span>

            <button onClick={() => onRemoveItem(index)}>❌</button>
          </div>
        ))
      )}

      <div className="mt-6">
        <p>Total: ₹{total}</p>
        <p>GST: ₹{gst}</p>
        <p className="text-orange-400 font-bold">Final: ₹{final}</p>
      </div>

    </div>
  );
};

export default Order;