function AboutPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-12">About</h1>
          </div>
          <div className="space-y-8 text-gray-700">
            <p className="text-lg leading-relaxed text-center">
              Puremagnetik makes creative music tools and pioneering sound recordings.
            </p>
            <div className="space-y-6 pt-8">
              <p className="leading-relaxed">
                Puremagnetik has been described by{' '}
                <a href="#" className="underline hover:text-gray-900">
                  Create Digital Music
                </a>{' '}
                as <em>"one of the most experienced sound library houses around"</em> and by{' '}
                <a href="#" className="underline hover:text-gray-900">
                  Electronic Beats
                </a>{' '}
                as <em>"Changing the album format in exciting, interactive ways."</em>
              </p>
              <p className="leading-relaxed">
                Founded in 2006, Puremagnetik originally established itself as a premier sound design company collaborating with{' '}
                <a href="#" className="underline hover:text-gray-900">
                  Ableton AG
                </a>{' '}
                based in Berlin.
              </p>
              <p className="leading-relaxed">
                Beginning in 2016, Puremagnetik embarked on a plugin development initiative using the open-source{' '}
                <a href="#" className="underline hover:text-gray-900">
                  Csound
                </a>{' '}
                audio language. Since that time, the company has developed several unique tools for sound design, synthesis and electronic music composition.
              </p>
              <p className="leading-relaxed">
                In 2018, Puremagnetik launched its music label focusing on several experimental and ambient genres.
              </p>
              <p className="leading-relaxed">
                Email : hello@puremagnetik.com
              </p>
              <p className="leading-relaxed">
                Instagram:{' '}
                <a 
                  href="http://instagram.com/puremagnetik" 
                  className="underline hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  http://instagram.com/puremagnetik
                </a>
              </p>
              <p className="leading-relaxed">
                Need Help?{' '}
                <a 
                  href="https://puremagnetik.com/pages/puremagnetik-help-faqs" 
                  className="underline hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://puremagnetik.com/pages/puremagnetik-help-faqs
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;