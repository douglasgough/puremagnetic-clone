import { Instagram, Youtube } from 'lucide-react';
function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <p className="text-sm text-gray-600">© Puremagnetik LLC 2024</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="space-y-2 md:text-right">
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Account</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Search</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Help</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Returns</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
            </nav>
            <div className="pt-4">
              <select className="text-sm border border-gray-300 rounded px-3 py-2 bg-white">
                <option>USD $</option>
                <option>EUR €</option>
                <option>GBP £</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;