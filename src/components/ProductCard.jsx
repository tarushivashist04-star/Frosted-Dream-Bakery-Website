const ProductCard = ({ product, isFeatured, onAddToCart }) => {
  return (
    <div
      className={`group relative rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(217,119,66,0.15)] flex flex-col h-full
      ${
        isFeatured
          ? "bg-bakery-dark border border-bakery-orange/40 shadow-[0_0_15px_rgba(217,119,66,0.05)]"
          : "bg-bakery-dark/50 border border-stone-800 hover:border-stone-700"
      }`}
    >
      {/* Bestseller */}
      {isFeatured && (
        <div className="absolute top-4 left-4 z-10 bg-bakery-orange text-white text-xs font-bold px-3 py-1 rounded-full">
          Bestseller
        </div>
      )}

      {/* IMAGE */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between mb-3">
          <h3 className="text-xl font-serif text-white">
            {product.name}
          </h3>

          <span className="text-bakery-orange font-semibold">
            ₹{Number(product.price).toFixed(0)}
          </span>
        </div>

        <p className="text-stone-400 text-sm mb-6 flex-grow">
          {product.description}
        </p>

        {/* 🔥 FIXED BUTTON */}
        <button
          onClick={() => onAddToCart(product)}   // ✅ IMPORTANT
          className="w-full py-3 rounded text-sm font-semibold border
          border-stone-700 text-stone-300 bg-stone-800/50
          hover:bg-bakery-orange hover:text-white transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;