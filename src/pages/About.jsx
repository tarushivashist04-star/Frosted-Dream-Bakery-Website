import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-[#0c0a09] text-white">

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div className="space-Ny-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Crafted With <br />
            <span className="text-[#D97745]">Passion & Precision</span>
          </h1>

          <p className="text-gray-400 text-lg">
            At Frosted Dreams, we don’t just bake — we create experiences.
            Every product is a blend of tradition, creativity, and premium quality.
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="w-[500px] h-[380px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/Images/person.webp"
              alt="cake"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* STATS SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10 text-center">

        <div>
          <h3 className="text-4xl font-bold text-[#D97745]">40+</h3>
          <p className="text-gray-400 mt-2">Years of Experience</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#D97745]">10K+</h3>
          <p className="text-gray-400 mt-2">Happy Customers</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-[#D97745]">100+</h3>
          <p className="text-gray-400 mt-2">Products Crafted</p>
        </div>

      </div>
      {/* NEW STORY / DESCRIPTION SECTION */}
<div className="max-w-4xl mx-auto px-6 pb-16 text-center space-y-6">

  <h2 className="text-2xl md:text-3xl font-semibold">
    Baking Happiness Since 1980
  </h2>

  <p className="text-gray-400 leading-relaxed">
    For over four decades, Frosted Dreams has been serving handcrafted
    baked goods made with passion and dedication. From warm breads to
    delightful desserts, every creation is designed to bring joy and
    comfort to your everyday moments.
  </p>

</div>

      {/* VALUES SECTION */}
      <div className="bg-[#1a1715] py-20 mt-20 md:mt-28">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Makes Us Special
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#0c0a09] p-8 rounded-xl border border-gray-800 hover:scale-105 transition">
              <h3 className="text-[#D97745] text-lg font-semibold mb-3">
                Premium Ingredients
              </h3>
              <p className="text-gray-300 text-sm">
                We use only the highest quality ingredients to ensure rich taste and freshness.
              </p>
            </div>

            <div className="bg-[#0c0a09] p-8 rounded-xl border border-gray-800 hover:scale-105 transition">
              <h3 className="text-[#D97745] text-lg font-semibold mb-3">
                Handmade With Love
              </h3>
              <p className="text-gray-300 text-sm">
                Every product is crafted by skilled bakers with attention to detail.
              </p>
            </div>

            <div className="bg-[#0c0a09] p-8 rounded-xl border border-gray-800 hover:scale-105 transition">
              <h3 className="text-[#D97745] text-lg font-semibold mb-3">
                Fresh Everyday
              </h3>
              <p className="text-gray-300 text-sm">
                We bake fresh daily to deliver the best quality and flavor.
              </p>
            </div>

          </div>

        </div>

      </div>

    
      <Footer />

    </div>
    
  );
};

export default About;