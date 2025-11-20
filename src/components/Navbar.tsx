import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="bg-[#ff00ff] text-white py-2 px-4 text-center text-sm font-medium">
        NOVEMBER SALE! 50% ALL PLUGINS, BUNDLES AND MORE. USE CODE: NOV25
      </div>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex-shrink-0">
                <img
                  src="https://puremagnetik.com/cdn/shop/files/Puremagnetik_Logo_Only_Black_60_7b501672-d1b4-4690-9f16-a777edd0f31e_600x200.png?v=1614325392"
                  alt="Puremagnetik"
                  className="h-8 w-auto"
                />
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link 
                  to="/collections/devices" 
                  className="text-sm font-medium text-gray-900 hover:text-gray-600 flex items-center gap-1"
                >
                  DIGITAL
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <button className="text-sm font-medium text-gray-900 hover:text-gray-600 flex items-center gap-1">
                  PHYSICAL
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <Link 
                  to="/pages/about-puremagnetik" 
                  className="text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  ABOUT
                </Link>
                <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-600">
                  HELP
                </a>
                <a href="/index.html" className="text-sm font-medium text-purple-600 hover:text-purple-700">
                  HTML VERSION
                </a>
              </div>
            </div>
            {/* Desktop Right Menu */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-sm font-medium text-gray-900 hover:text-gray-600">
                SEARCH
              </button>
              <button className="text-sm font-medium text-gray-900 hover:text-gray-600">
                ACCOUNT
              </button>
              <button className="text-sm font-medium text-gray-900 hover:text-gray-600">
                CART
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-900 hover:text-gray-600"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-4">
              <Link
                to="/collections/devices"
                className="block text-base font-medium text-gray-900 hover:text-gray-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                DIGITAL
              </Link>
              <button className="block w-full text-left text-base font-medium text-gray-900 hover:text-gray-600 py-2">
                PHYSICAL
              </button>
              <Link
                to="/pages/about-puremagnetik"
                className="block text-base font-medium text-gray-900 hover:text-gray-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <a href="#" className="block text-base font-medium text-gray-900 hover:text-gray-600 py-2">
                HELP
              </a>
              <a href="/index.html" className="block text-base font-medium text-purple-600 hover:text-purple-700 py-2">
                HTML VERSION
              </a>
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <button className="flex items-center gap-3 text-base font-medium text-gray-900 hover:text-gray-600 py-2">
                  SEARCH
                </button>
                <button className="flex items-center gap-3 text-base font-medium text-gray-900 hover:text-gray-600 py-2">
                  ACCOUNT
                </button>
                <button className="flex items-center gap-3 text-base font-medium text-gray-900 hover:text-gray-600 py-2">
                  CART
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
export default Navbar;