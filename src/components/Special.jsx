import ProductCard from "./ProductCard";

const specialItems = [
  {
    id: 101,
    name: "Honey Lavender Cheesecake",
    description: "Delicately infused with floral lavender and sweet honey, offering a calm and luxurious bite.",
    price: 750,
    image: "/Images/Cheesecake.jpeg",
    isFeatured: true
  },
  {
    id: 102,
    name: "Strawberry Matcha Tart",
    description: "A fusion of earthy matcha and fresh strawberries on a crisp tart base.",
    price: 680,
    image: "/Images/Matcha Tart.jpg",
    isFeatured: true
  },
  {
    id: 103,
    name: "Dark Chocolate Lava Croissant",
    description: "Flaky croissant filled with molten dark chocolate for a rich indulgent center.",
    price: 590,
    image: "/Images/Lava Croissant.jpeg",
    isFeatured: true
  },
  {
    id: 104,
    name: "Vanilla Bean Cheesecake Jar",
    description: "Smooth no-bake cheesecake layered with vanilla cream and biscuit crumble.",
    price: 520,
    image: "/Images/Vanilla Jar.jpg",
    isFeatured: true
  }
];

const Special = ({ onAddToCart }) => {
  return (
    <section className="py-24 bg-[#0f0c0a] relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

       <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
              Special{" "}
              <span className="text-bakery-beige italic font-light">
                Offerings
              </span>
            </h2>
            <p className="text-stone-400 text-lg">
                        Exclusive creations crafted for a premium experience.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialItems.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              isFeatured={item.isFeatured}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Special;