function Hero() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              SAVE 50% ON SOUNDS, DEVICES AND BUNDLES
            </h1>
            <div className="space-y-3 text-gray-700">
              <p className="text-lg">
                Now through November 30th, upgrade your music production arsenal with Puremagnetik's plugins and sounds.
              </p>
              <p className="text-lg">
                Use coupon code <span className="font-bold">NOV25</span> at checkout to enjoy 50% off all plugins and sounds in your cart.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://jojdwiugelqhcajbccxn.supabase.co/storage/v1/object/public/images/1763655131194-c168911f-9ffd-45cc-9be0-f9a8ce27f3e7-screenshot.jpg"
              alt="Plugin Collection"
              className="w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;