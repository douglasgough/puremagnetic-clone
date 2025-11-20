function ProductGrid() {
  const products = [
    {
      id: 1,
      image: 'https://picsum.photos/id/1/400/400',
      title: 'Digital Plugins',
      subtitle: 'Audio Software'
    },
    {
      id: 2,
      image: 'https://picsum.photos/id/180/400/400',
      title: 'LARS',
      subtitle: 'Guitar Pedal'
    },
    {
      id: 3,
      image: 'https://picsum.photos/id/102/400/400',
      title: 'Vinyl Collection',
      subtitle: 'Physical Media'
    },
    {
      id: 4,
      image: 'https://picsum.photos/id/1/400/400',
      title: 'Sage Plugin',
      subtitle: 'Spectral Delay'
    }
  ];
  return (
    <section className="py-16 px-4 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
                <p className="text-sm text-gray-500">{product.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProductGrid;