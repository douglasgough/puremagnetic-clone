import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import FeaturedProduct from './components/FeaturedProduct';
import Footer from './components/Footer';
import PluginsPage from './pages/PluginsPage';
import AboutPage from './pages/AboutPage';
import ProductDetailPage from './pages/ProductDetailPage';
import './globals.css';
function HomePage() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <FeaturedProduct />
    </>
  );
}
function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections/devices" element={<PluginsPage />} />
        <Route path="/pages/about-puremagnetik" element={<AboutPage />} />
        <Route path="/collections/devices/products/permute-buffer-modulation-matrix-ableton-effects-plugin" element={<ProductDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;