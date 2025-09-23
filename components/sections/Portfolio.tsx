'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import OptimizedImage from '../OptimizedImage';

const portfolioItems = [
  // Bathroom projects first
  {
    id: 1,
    category: 'bathroom',
    title: 'Guest Bathroom Renovation',
    location: 'Bellaire',
    image: '/images/Examples/18 Guest Bathroom.jpg',
    description: 'Complete guest bathroom transformation with modern fixtures.',
  },
  {
    id: 2,
    category: 'bathroom',
    title: 'Guest Bath & Shower',
    location: 'Sugar Land',
    image: '/images/Examples/20 Guest Bathroom & Shower.jpg',
    description: 'Guest bathroom featuring a luxurious walk-in shower.',
  },
  {
    id: 3,
    category: 'bathroom',
    title: 'Master Bathroom Vanity',
    location: 'Katy',
    image: '/images/Examples/24 Master Bathroom Vanity.jpg',
    description: 'Elegant master bathroom with double vanity installation.',
  },
  {
    id: 4,
    category: 'bathroom',
    title: 'Luxury Master Bathroom',
    location: 'The Woodlands',
    image: '/images/Examples/25 Master Bathroom.jpg',
    description: 'Spa-inspired master bathroom complete renovation.',
  },
  {
    id: 5,
    category: 'bathroom',
    title: 'Master Bath with Walk-in Shower',
    location: 'Cypress',
    image: '/images/Examples/26 Master Bathroom Vanity & Shower.jpg',
    description: 'Master bathroom featuring custom vanity and spacious shower.',
  },
  {
    id: 6,
    category: 'bathroom',
    title: 'Master Shower Installation',
    location: 'Spring',
    image: '/images/Examples/27 Master Bathroom Shower.jpg',
    description: 'Luxurious master shower with premium tile work.',
  },
  {
    id: 7,
    category: 'bathroom',
    title: 'Modern Bathroom Design',
    location: 'Montrose',
    image: '/images/Examples/Bath09.jpg',
    description: 'Contemporary bathroom with sleek fixtures and finishes.',
  },
  {
    id: 8,
    category: 'bathroom',
    title: 'Classic Bathroom Remodel',
    location: 'River Oaks',
    image: '/images/Examples/Bath10.jpg',
    description: 'Traditional bathroom renovation with timeless appeal.',
  },
  {
    id: 9,
    category: 'bathroom',
    title: 'Elegant Bathroom Update',
    location: 'Memorial',
    image: '/images/Examples/Bath22.jpg',
    description: 'Sophisticated bathroom upgrade with premium materials.',
  },
  {
    id: 10,
    category: 'bathroom',
    title: 'Spa-Style Bathroom',
    location: 'Heights',
    image: '/images/Examples/BathOHP_2351_2_3.jpg',
    description: 'Relaxing spa-inspired bathroom renovation.',
  },
  {
    id: 11,
    category: 'bathroom',
    title: 'Contemporary Bath Design',
    location: 'Midtown',
    image: '/images/Examples/BathOHP_2354_5_6.jpg',
    description: 'Modern bathroom with custom tile and fixtures.',
  },
  {
    id: 12,
    category: 'bathroom',
    title: 'Master Suite Bathroom',
    location: 'West University',
    image: '/images/Examples/BathOHP_2357_8_9.jpg',
    description: 'Luxurious master suite bathroom complete renovation.',
  },
  // Kitchen projects second
  {
    id: 13,
    category: 'kitchen',
    title: 'Modern Kitchen Renovation',
    location: 'River Oaks',
    image: '/images/Examples/07 Kitchen.jpg',
    description: 'Complete kitchen transformation with modern cabinetry and appliances.',
  },
  {
    id: 14,
    category: 'kitchen',
    title: 'Kitchen & Sink Upgrade',
    location: 'Midtown Houston',
    image: '/images/Examples/08 Kitchen & Sink.jpg',
    description: 'Beautiful kitchen renovation featuring a new farmhouse sink and fixtures.',
  },
  {
    id: 15,
    category: 'kitchen',
    title: 'Kitchen with Quartz Counters',
    location: 'Memorial',
    image: '/images/Examples/09 Kitchen & Counters.jpg',
    description: 'Stunning kitchen remodel with premium quartz countertops.',
  },
  {
    id: 16,
    category: 'kitchen',
    title: 'Contemporary Kitchen Design',
    location: 'The Heights',
    image: '/images/Examples/Kitchen.webp',
    description: 'Modern kitchen with open concept design and custom lighting.',
  },
  {
    id: 17,
    category: 'kitchen',
    title: 'Traditional Kitchen Remodel',
    location: 'West University',
    image: '/images/Examples/KitchenOHP_2372_3_4.jpg',
    description: 'Classic kitchen renovation with timeless design elements.',
  },
  // Roofing projects third
  {
    id: 18,
    category: 'roofing',
    title: 'Complete Roof Replacement',
    location: 'Spring',
    image: '/images/Fence and Patio/Roof1.png',
    description: 'Full roof replacement with high-quality shingles and warranty.',
  },
  {
    id: 19,
    category: 'roofing',
    title: 'Architectural Shingle Installation',
    location: 'Cypress',
    image: '/images/Fence and Patio/Roof2.png',
    description: 'Premium architectural shingles with enhanced wind resistance.',
  },
  // Patio and outdoor living fourth
  {
    id: 20,
    category: 'patio',
    title: 'Stamped Concrete Patio',
    location: 'Bellaire',
    image: '/images/Fence and Patio/Patio1.png',
    description: 'Elegant stamped concrete patio with custom pattern and color.',
  },
  {
    id: 21,
    category: 'patio',
    title: 'Outdoor Living Space',
    location: 'West University',
    image: '/images/Fence and Patio/Patio2.png',
    description: 'Complete outdoor living area with patio and landscaping.',
  },
  {
    id: 22,
    category: 'patio',
    title: 'Paver Patio Installation',
    location: 'River Oaks',
    image: '/images/Fence and Patio/Patio3.png',
    description: 'Premium paver patio with intricate design and perfect drainage.',
  },
  {
    id: 23,
    category: 'exterior',
    title: 'Complete Exterior Renovation',
    location: 'Houston',
    image: '/images/Examples/Exterior After.webp',
    description: 'Full exterior transformation including siding, trim, and landscaping.',
  },
  // Concrete projects fifth
  {
    id: 24,
    category: 'concrete',
    title: 'Decorative Concrete Driveway',
    location: 'River Oaks',
    image: '/images/Concrete/3E4B18B9-22EA-4F02-AB92-5562E19EAD85_4_5005_c.jpeg',
    description: 'Beautiful stamped concrete driveway with custom pattern and color.',
  },
  {
    id: 25,
    category: 'concrete',
    title: 'Concrete Walkway Installation',
    location: 'Memorial',
    image: '/images/Concrete/779FF0DB-AE15-4AF5-B910-F44DA724CB97_4_5005_c.jpeg',
    description: 'Custom concrete walkway with exposed aggregate finish.',
  },
  {
    id: 26,
    category: 'concrete',
    title: 'Foundation Repair & Pour',
    location: 'Bellaire',
    image: '/images/Concrete/0C3EC362-F9FC-4334-8E50-81FA08F6F44A_4_5005_c.jpeg',
    description: 'Complete foundation repair and new concrete pour for structural integrity.',
  },
  {
    id: 27,
    category: 'concrete',
    title: 'Stamped Concrete Patio',
    location: 'West University',
    image: '/images/Concrete/1BA7C24A-277B-4D75-8E9E-478E2267D0CD_4_5005_c.jpeg',
    description: 'Elegant stamped concrete patio with custom design and sealing.',
  },
  {
    id: 28,
    category: 'concrete',
    title: 'Concrete Pool Deck',
    location: 'The Woodlands',
    image: '/images/Concrete/2E20A54A-1BEB-462E-A7E7-7C8C5FFE8AFF_4_5005_c.jpeg',
    description: 'Slip-resistant concrete pool deck with decorative border.',
  },
  {
    id: 29,
    category: 'concrete',
    title: 'Garage Floor Coating',
    location: 'Sugar Land',
    image: '/images/Concrete/29024339-DAEC-4E26-917A-D6E4043F90DB_4_5005_c.jpeg',
    description: 'Professional garage floor epoxy coating with custom flake design.',
  },
  {
    id: 30,
    category: 'concrete',
    title: 'Concrete Steps & Landing',
    location: 'Heights',
    image: '/images/Concrete/04F86A8D-AAF3-44CD-B490-A1A7A6E8C18C_4_5005_c.jpeg',
    description: 'Custom concrete steps with integrated lighting and anti-slip surface.',
  },
  {
    id: 31,
    category: 'concrete',
    title: 'Decorative Concrete Borders',
    location: 'Katy',
    image: '/images/Concrete/ED4AFA04-C2B3-43FE-A9FE-623DE6EAB90B_4_5005_c.jpeg',
    description: 'Decorative concrete landscape borders and edging.',
  },
  {
    id: 32,
    category: 'concrete',
    title: 'Concrete Retaining Wall',
    location: 'Spring',
    image: '/images/Concrete/F6C6615B-0C72-4376-9E88-A21BC6D9AAA3_4_5005_c.jpeg',
    description: 'Engineered concrete retaining wall for erosion control and landscaping.',
  },
  // Fence projects sixth
  {
    id: 33,
    category: 'fence',
    title: 'Privacy Fence Installation',
    location: 'Sugar Land',
    image: '/images/Fence and Patio/Fence1.png',
    description: 'High-quality privacy fence providing security and curb appeal.',
  },
  {
    id: 34,
    category: 'fence',
    title: 'Custom Wood Fence',
    location: 'Katy',
    image: '/images/Fence and Patio/Fence2.png',
    description: 'Beautiful custom wood fence with decorative elements.',
  },
  // Deck projects last
  {
    id: 35,
    category: 'deck',
    title: 'Custom Deck Construction',
    location: 'Memorial',
    image: '/images/Fence and Patio/Deck1.png',
    description: 'Beautiful custom deck with premium materials and expert craftsmanship.',
  },
  {
    id: 36,
    category: 'deck',
    title: 'Elevated Deck Installation',
    location: 'The Woodlands',
    image: '/images/Fence and Patio/Deck2.png',
    description: 'Multi-level deck design perfect for entertaining and outdoor living.',
  },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'kitchen', name: 'Kitchens' },
  { id: 'bathroom', name: 'Bathrooms' },
  { id: 'deck', name: 'Decks' },
  { id: 'fence', name: 'Fences' },
  { id: 'patio', name: 'Patios' },
  { id: 'concrete', name: 'Concrete' },
  { id: 'roofing', name: 'Roofing' },
  { id: 'exterior', name: 'Exteriors' },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Take a look at some of our completed projects. Each one represents our 
            commitment to quality and attention to detail.
          </p>
        </div>

        {/* Category Filter - Enhanced for Mobile */}
        <div className="flex overflow-x-auto pb-2 md:justify-center gap-2 mb-12 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid - Optimized for All Devices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-64">
                <OptimizedImage
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.location}</p>
                  <p className="text-xs mt-2 text-blue-300 font-semibold">Tap to view details</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden">
              <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                <OptimizedImage
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  sizes="(max-width: 1536px) 100vw, 1536px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-blue-600 mb-2">{selectedImage.location}</p>
                <p className="text-gray-800">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;