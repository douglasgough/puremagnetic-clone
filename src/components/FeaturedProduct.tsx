import { Button } from './ui/button';
function FeaturedProduct() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A cutting-edge spectral processor for crafting shimmering rhythmic patterns and subtle harmonic overtones.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/id/1/600/500"
                alt="Sage Spectral Delay"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/id/180/600/400"
                alt="Hardware Setup"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="space-y-6 md:sticky md:top-24">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sage | Spectral Delay</h2>
              <p className="text-2xl font-semibold text-gray-900">$35.00</p>
            </div>
            <div className="space-y-3">
              <Button 
                className="w-full bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-colors py-6 text-base font-medium rounded-none"
              >
                ADD TO CART
              </Button>
              <Button 
                className="w-full bg-[#5a31f4] hover:bg-[#4a21d4] text-white py-6 text-base font-medium rounded-md"
              >
                Buy with ShopPay
              </Button>
              <button className="w-full text-sm text-gray-600 hover:text-gray-900 underline py-2">
                MORE PAYMENT OPTIONS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FeaturedProduct;