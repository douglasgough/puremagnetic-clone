import { useState } from 'react';
import { Link } from 'react-router-dom';
function PluginsPage() {
  const [sortBy, setSortBy] = useState('newest');
  const plugins = [
    {
      id: 1,
      name: 'Permute | Buffer Modulation Matrix',
      price: '$20.00',
      image: 'https://picsum.photos/id/1/400/300'
    },
    {
      id: 2,
      name: 'PM-202 | Hybrid complex Oscillator Designer',
      price: '$25.00',
      image: 'https://picsum.photos/id/2/400/300'
    },
    {
      id: 3,
      name: 'Auros | Ambient Texture Shaper',
      price: '$19.00',
      image: 'https://picsum.photos/id/3/400/300'
    },
    {
      id: 4,
      name: 'Fastslode II | Micro-Memory Reverb',
      price: '$30.00',
      image: 'https://picsum.photos/id/4/400/300'
    },
    {
      id: 5,
      name: 'Sage | Spectral Delay',
      price: '$35.00',
      image: 'https://picsum.photos/id/5/400/300'
    },
    {
      id: 6,
      name: 'Goatsizopy | Wave Modulation Delay',
      price: '$25.00',
      image: 'https://picsum.photos/id/6/400/300'
    },
    {
      id: 7,
      name: 'Woolgen | Phase Modulation Matrix',
      price: '$20.00',
      image: 'https://picsum.photos/id/7/400/300'
    },
    {
      id: 8,
      name: 'Bunker | Gritebox Processor',
      price: '$25.00',
      image: 'https://picsum.photos/id/8/400/300'
    },
    {
      id: 9,
      name: 'Kismur | Dual Loopback Processor',
      price: '$20.00',
      image: 'https://picsum.photos/id/9/400/300'
    },
    {
      id: 10,
      name: 'Etoppe | Geometric Delay Console',
      price: '$30.00',
      image: 'https://picsum.photos/id/10/400/300'
    },
    {
      id: 11,
      name: 'Omiharp | Electronic Strum Machine',
      price: '$25.00',
      image: 'https://picsum.photos/id/11/400/300'
    },
    {
      id: 12,
      name: 'Twine | Lossy MultiEffects Mixer',
      price: '$35.00',
      image: 'https://picsum.photos/id/12/400/300'
    },
    {
      id: 13,
      name: 'Dregin | Grain Silhouette Shaper',
      price: '$25.00',
      image: 'https://picsum.photos/id/13/400/300'
    },
    {
      id: 14,
      name: 'Gales | Warped Cartridge Echo',
      price: '$20.00',
      image: 'https://picsum.photos/id/14/400/300'
    },
    {
      id: 15,
      name: 'Quazetion | Cybernetic Retobuffer',
      price: '$35.00',
      image: 'https://picsum.photos/id/15/400/300'
    },
    {
      id: 16,
      name: 'Lotar | West Coast Mod Box',
      price: '$25.00',
      image: 'https://picsum.photos/id/16/400/300'
    },
    {
      id: 17,
      name: 'Toska | Modulation Control Board',
      price: '$30.00',
      image: 'https://picsum.photos/id/17/400/300'
    },
    {
      id: 18,
      name: 'Hewn | Disturbance Reactor',
      price: '$20.00',
      image: 'https://picsum.photos/id/18/400/300'
    },
    {
      id: 19,
      name: 'Foom | Bass Drum Tape',
      price: '$25.00',
      image: 'https://picsum.photos/id/19/400/300'
    },
    {
      id: 20,
      name: 'Sphire | Reflection Harvester',
      price: '$30.00',
      image: 'https://picsum.photos/id/20/400/300'
    },
    {
      id: 21,
      name: 'Tenoid | Tension Resonator Repeater',
      price: '$25.00',
      image: 'https://picsum.photos/id/21/400/300'
    },
    {
      id: 22,
      name: 'Qsim | FM Drone Animator',
      price: '$20.00',
      image: 'https://picsum.photos/id/22/400/300'
    },
    {
      id: 23,
      name: 'Ember | Microsound Collage Machine',
      price: '$25.00',
      image: 'https://picsum.photos/id/23/400/300'
    },
    {
      id: 24,
      name: 'Voga | Stochastic Strum Machine',
      price: '$35.00',
      image: 'https://picsum.photos/id/24/400/300'
    }
  ];
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">PLUGINS</h1>
          <p className="text-gray-600 italic max-w-3xl mx-auto">
            "Some of the most musically inspiring tools you can find on the market" —AudioNewsRoom
          </p>
        </div>
        <div className="flex flex-col items-center mb-8">
          <label htmlFor="sort" className="text-sm text-gray-700 mb-2">SORT BY:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 text-sm bg-white"
          >
            <option value="newest">Newest to Oldest</option>
            <option value="oldest">Oldest to Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-az">Name: A-Z</option>
            <option value="name-za">Name: Z-A</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {plugins.map((plugin) => (
            <Link 
              key={plugin.id} 
              to="/collections/devices/products/permute-buffer-modulation-matrix-ableton-effects-plugin"
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 mb-3">
                <div className="aspect-[4/3]">
                  <img
                    src={plugin.image}
                    alt={plugin.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="text-center space-y-1">
                <h3 className="text-sm font-medium text-gray-900">{plugin.name}</h3>
                <p className="text-sm text-gray-600">{plugin.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="px-3 py-1 text-sm text-gray-900 hover:underline">1</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:underline">2</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900 hover:underline">3</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">→</button>
        </div>
      </div>
    </div>
  );
}
export default PluginsPage;