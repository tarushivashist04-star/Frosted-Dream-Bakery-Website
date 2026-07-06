import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Sourdough Boule',
    description: 'Our signature wild yeast sourdough with a dark crust and open, chewy crumb.',
    price: 280,
    image: '/Images/Sourdough Boule.jpeg',
    isFeatured: true
  },
  {
    id: 2,
    name: 'Almond Croissant',
    description: 'Flaky pastry filled with frangipane and topped with toasted almonds.',
    price: 540,
    image: '/Images/Almond.jpg',
    isFeatured: false
  },
  {
    id: 3,
    name: 'Everything Bagel',
    description: 'New York style boiled bagel heavily coated with our house everything mix.',
    price: 435,
    image: '/Images/Everything Bagel.jpg',
    isFeatured: false
  },
  {
    id: 4,
    name: 'Chocolate Babka',
    description: 'Rich brioche dough braided with dark chocolate ganache and streusel.',
    price: 500,
    image: '/Images/Babka.webp',
    isFeatured: false
  },
  {
    id: 5,
    name: 'Blueberry Muffin',
    description: 'Soft and fluffy muffin loaded with fresh blueberries.',
    price: 650,
    image: '/Images/Muffin.jpeg',
    isFeatured: false
  },
  {
    id: 6,
    name: 'Cinnamon Roll',
    description: 'Warm cinnamon roll topped with creamy glaze.',
    price: 359,
    image: '/Images/Cinnamon Roll.jpg',
    isFeatured: false
  },
  {
    id: 7,
    name: 'Red Velvet Cake',
    description: 'Moist red velvet cake layered with cream cheese frosting.',
    price: 1100,
    image: '/Images/Cake.webp',
    isFeatured: true
  },
  {
    id: 8,
    name: 'Chocolate Donut',
    description: 'Classic donut dipped in rich chocolate glaze.',
    price: 467,
    image: '/Images/Donut.jpeg',
    isFeatured: false
  }
];

const ProductGrid = ({ onAddToCart }) => {
  return (
    <section
      id="menu"
      className="py-24 bg-bakery-darker relative scroll-mt-24"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
              Customer{" "}
              <span className="text-bakery-beige italic font-light">
                Favourites
              </span>
            </h2>
            <p className="text-stone-400 text-lg">
              Baked fresh every morning. From our ovens to your table.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFeatured={product.isFeatured}
              onAddToCart={onAddToCart} // 🔥 important
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;