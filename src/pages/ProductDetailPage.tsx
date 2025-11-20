import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
function ProductDetailPage() {
  const relatedProducts = [
    {
      id: 1,
      name: 'Microspire Tools | Audio Buffer Manipulation Devices',
      price: '$75.00',
      salePrice: '$60.00',
      image: 'https://picsum.photos/id/180/400/400'
    },
    {
      id: 2,
      name: 'Fastslode II | Micro-Memory Reverb',
      price: '$20.00',
      image: 'https://picsum.photos/id/181/400/400'
    },
    {
      id: 3,
      name: 'Fathoms | Spectral Ambient Processor',
      price: '$25.00',
      image: 'https://picsum.photos/id/182/400/400'
    },
    {
      id: 4,
      name: 'Splitch | Distortion & Pitch Mangling Machine',
      price: '$25.00',
      image: 'https://picsum.photos/id/183/400/400'
    }
  ];
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763656290995-c168911f-9ffd-45cc-9be0-f9a8ce27f3e7-screenshot.jpg"
                alt="Permute Buffer Modulation Matrix"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-medium text-gray-900 mb-2">
                Permute | Buffer Modulation Matrix
              </h1>
              <p className="text-xl font-semibold text-gray-900">$20.00</p>
            </div>
            <Button className="w-full bg-black hover:bg-gray-800 text-white py-6 text-base font-medium rounded-none">
              ADD TO CART
            </Button>
          </div>
        </div>
        <div className="max-w-4xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              Permute is a dynamic and versatile audio manipulation tool designed for producers, sound designers, and experimental musicians. Combining intuitive controls with deep modulation capabilities, Permute invites you to explore granular looping, spectral shaping, and spatial processing to craft intricate soundscapes and rhythmic textures.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Key Features</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="leading-relaxed">
                <strong>Granular Looping:</strong> Effortlessly capture and rearrange audio loops with precise control over start, window size, and placement. Advanced modulation options allow loops to evolve and shift in real time.
              </li>
              <li className="leading-relaxed">
                <strong>Customizable Filters:</strong> Sculpt your sound with Low-Pass, High-Pass, and Band-Pass filters. Shape resonance and apply modulation shapes (triangle, sine, square, and random) for dynamic sonic transformations.
              </li>
              <li className="leading-relaxed">
                <strong>Placement Modulation:</strong> Randomize or automate the spatial position of audio fragments within the loop for added motion and variety.
              </li>
              <li className="leading-relaxed">
                <strong>Window Control:</strong> Shape and transform loop playback with adjustable window size and speeds, creating unique granular textures.
              </li>
              <li className="leading-relaxed">
                <strong>Drive and Feedback:</strong> Add warmth and character with analog-style drive and dial in harmonic saturation or distortion through controlled echoes.
              </li>
              <li className="leading-relaxed">
                <strong>Space and Reverb:</strong> Expand your sound's depth with lush, configurable reverb and spatial effects that integrate seamlessly with your mix.
              </li>
              <li className="leading-relaxed">
                <strong>Mix Modulation:</strong> Balance your dry and wet signals with modulatable crossfades to create dynamic blends of original and processed audio.
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Interactive Features</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="leading-relaxed">
                <strong>Signal Display:</strong> Visualize your waveform and loop points in real-time for precise editing.
              </li>
              <li className="leading-relaxed">
                <strong>"Jumble" Button:</strong> Instantly randomize parameters across the interface to spark creativity and discover unexpected textures.
              </li>
              <li className="leading-relaxed">
                <strong>Preset System:</strong> Save and recall your favorite setups with an easy-to-use preset manager.
              </li>
              <li className="leading-relaxed">
                <strong>Host Sync:</strong> Automatically align modulation speeds and timing effects with your project's tempo for flawless synchronization.
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Minimum Requirements</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>OS X:</strong> Version 10.11 or later.</li>
              <li><strong>Windows:</strong> Windows 10 x64.</li>
              <li><strong>Host compatibility:</strong> Audio Units or VST-compatible audio hosts.</li>
            </ul>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl font-medium text-gray-900 text-center mb-12">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Link 
                key={product.id}
                to="/collections/devices/products/permute-buffer-modulation-matrix-ableton-effects-plugin"
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300 mb-3">
                  <div className="aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <div className="flex items-center justify-center gap-2">
                    {product.salePrice ? (
                      <>
                        <span className="text-sm text-gray-400 line-through">{product.price}</span>
                        <span className="text-sm text-gray-900 font-medium">{product.salePrice}</span>
                      </>
                    ) : (
                      <span className="text-sm text-gray-900">{product.price}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailPage;