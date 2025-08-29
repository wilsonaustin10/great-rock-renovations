'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    category: 'deck',
    title: 'Modern Composite Deck',
    location: 'River Oaks',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
    description: 'Beautiful composite deck with built-in lighting and custom railings.',
  },
  {
    id: 2,
    category: 'kitchen',
    title: 'Contemporary Kitchen Remodel',
    location: 'Midtown Houston',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    description: 'Complete kitchen renovation with modern appliances and quartz countertops.',
  },
  {
    id: 3,
    category: 'fence',
    title: 'Cedar Privacy Fence',
    location: 'Bellaire',
    image: 'https://images.unsplash.com/photo-1621873495884-845e939ac8df?w=600&h=400&fit=crop',
    description: 'Custom cedar fence installation with decorative top trim.',
  },
  {
    id: 4,
    category: 'bathroom',
    title: 'Luxury Bathroom Renovation',
    location: 'West University',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop',
    description: 'Spa-inspired bathroom with walk-in shower and freestanding tub.',
  },
  {
    id: 5,
    category: 'roofing',
    title: 'Complete Roof Replacement',
    location: 'The Woodlands',
    image: 'https://images.unsplash.com/photo-1632327042343-702c12ae0c9e?w=600&h=400&fit=crop',
    description: 'Full roof replacement with architectural shingles and improved ventilation.',
  },
  {
    id: 6,
    category: 'deck',
    title: 'Poolside Deck Extension',
    location: 'Katy',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc9e?w=600&h=400&fit=crop',
    description: 'Expanded deck area around pool with slip-resistant decking.',
  },
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'deck', name: 'Decks' },
  { id: 'kitchen', name: 'Kitchens' },
  { id: 'bathroom', name: 'Bathrooms' },
  { id: 'fence', name: 'Fences' },
  { id: 'roofing', name: 'Roofing' },
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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our completed projects. Each one represents our 
            commitment to quality and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.location}</p>
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
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-primary-600 mb-2">{selectedImage.location}</p>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;