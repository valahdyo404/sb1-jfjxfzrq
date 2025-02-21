export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-[#8BA888] flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564121211835-e88c852648ab')] bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564121211835-e88c852648ab')" }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="arabic-text text-6xl mb-6">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Islam is the Truth</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore the beauty of Islam through reason, science, and divine guidance
          </p>
          <button className="bg-[#D4AF37] hover:bg-[#B89B30] text-white px-8 py-3 rounded-lg transition-colors">
            Begin Your Journey
          </button>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-[#787878] mb-8">
              To present the truth of Islam through authentic knowledge, rational discourse, 
              and scientific evidence, helping seekers find clarity and guidance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 mx-auto mb-4 text-[#D4AF37]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Scientific Miracles</h3>
                <p className="text-[#787878]">Discover scientific facts revealed in the Quran</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 mx-auto mb-4 text-[#D4AF37]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Logical Proofs</h3>
                <p className="text-[#787878]">Explore rational arguments for Islamic beliefs</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 mx-auto mb-4 text-[#D4AF37]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Historical Evidence</h3>
                <p className="text-[#787878]">Examine historical proofs of Islamic authenticity</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                <div className="w-12 h-12 mx-auto mb-4 text-[#D4AF37]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-[#787878]">Connect with fellow seekers of knowledge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-[#E8E4D9]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Scientific Miracles in the Quran',
                excerpt: 'Discover how the Quran described scientific facts centuries before their discovery.',
                image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
              },
              {
                title: 'The Preservation of the Quran',
                excerpt: 'Learn about the unique preservation of the Quran throughout history.',
                image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae',
              },
              {
                title: 'Islamic Golden Age',
                excerpt: 'Explore the contributions of Muslim scholars to science and civilization.',
                image: 'https://images.unsplash.com/photo-1584719866406-c76ddee68b83',
              },
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="h-48 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-[#787878] mb-4">{article.excerpt}</p>
                  <button className="w-full px-4 py-2 border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-white transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#507D7A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
            <p className="text-lg mb-8">
              Subscribe to our newsletter for weekly insights, articles, and updates about Islam.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-black"
                required
              />
              <button
                type="submit"
                className="bg-[#D4AF37] hover:bg-[#B89B30] text-white px-8 py-2 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}