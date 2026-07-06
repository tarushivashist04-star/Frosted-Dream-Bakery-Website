import React from 'react';

const Footer = () => {
  return (
    // ✅ ID ADDED FOR CONTACT NAVIGATION
    <footer id="contact" className="bg-[#0c0a09] border-t border-stone-900 pt-16 pb-8 relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-bakery-orange/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="font-serif text-2xl font-bold tracking-wider text-bakery-beige mb-6 block">
              Frosted Dreams
            </a>
            <p className="text-stone-400 max-w-sm font-light leading-relaxed">
              Preserving the ancient traditions of artisan baking, one loaf at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Locations</h4>
            <ul className="space-y-4 text-stone-400 font-light">
              <li>The central Lutyens' Bungalow Zone (LBZ)</li>
              <li>South Delhi</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-stone-400 font-light cursor-pointer">
              <li className="hover:text-bakery-orange transition-colors">foresteddreams23@gmail.com</li>
              <li className="hover:text-bakery-orange transition-colors">+91 8739023487</li>
            </ul>
          </div>

        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-800/50">
          <p className="text-stone-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Frosted Dreams. All rights reserved.
          </p>
          <div className="flex space-x-6 text-stone-500">
            {['Instagram', 'Facebook', 'Twitter'].map(social => (
              <a key={social} href="#" className="hover:text-bakery-orange transition-colors text-sm">
                {social}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;