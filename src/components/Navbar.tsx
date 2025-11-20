import { Link } from 'react-router-dom';
function Navbar() {
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
              </div>
            </div>
            <div className="flex items-center gap-4">
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
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;