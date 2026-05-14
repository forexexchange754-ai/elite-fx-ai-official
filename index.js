export default function EliteFXAIWebsite() { return ( <div className="min-h-screen bg-black text-white font-sans"> {/* Hero Section */} <section className="bg-gradient-to-b from-black via-gray-900 to-black px-6 py-16 text-center"> <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-yellow-400"> ELITE FX AI </h1> <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto"> Advanced AI Trading Bot for Forex, Gold & Crypto Markets. </p>

<div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
      <a
        href="https://wa.me/1234567890"
        className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
      >
        Contact on WhatsApp
      </a>

      <a
        href="#features"
        className="border border-yellow-400 px-8 py-4 rounded-2xl font-bold hover:bg-yellow-400 hover:text-black transition"
      >
        Explore Features
      </a>
    </div>
  </section>

  {/* Features */}
  <section id="features" className="px-6 py-16 bg-gray-950">
    <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
      Why Choose Elite FX AI?
    </h2>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-800">
        <h3 className="text-2xl font-bold mb-4">AI Smart Signals</h3>
        <p className="text-gray-300">
          High-probability AI-powered entries with advanced market analysis.
        </p>
      </div>

      <div className="bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-800">
        <h3 className="text-2xl font-bold mb-4">Auto Trading</h3>
        <p className="text-gray-300">
          Fully automated execution with smart risk management.
        </p>
      </div>

      <div className="bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-800">
        <h3 className="text-2xl font-bold mb-4">24/7 Market Analysis</h3>
        <p className="text-gray-300">
          Real-time monitoring of Forex, Gold, Crypto & Indices markets.
        </p>
      </div>
    </div>
  </section>

  {/* Pricing */}
  <section className="px-6 py-16 bg-black text-center">
    <h2 className="text-4xl font-bold text-yellow-400 mb-12">
      Pricing Plans
    </h2>

    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
        <h3 className="text-2xl font-bold mb-4">Basic</h3>
        <p className="text-5xl font-bold text-yellow-400">$99</p>
        <p className="mt-4 text-gray-300">Monthly Access</p>
      </div>

      <div className="bg-yellow-400 text-black rounded-3xl p-8 scale-105 shadow-2xl">
        <h3 className="text-2xl font-bold mb-4">Premium</h3>
        <p className="text-5xl font-bold">$299</p>
        <p className="mt-4">Advanced AI + VIP Signals</p>
      </div>

      <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800">
        <h3 className="text-2xl font-bold mb-4">Lifetime</h3>
        <p className="text-5xl font-bold text-yellow-400">$999</p>
        <p className="mt-4 text-gray-300">One Time Payment</p>
      </div>
    </div>
  </section>

  {/* About */}
  <section className="px-6 py-16 bg-gray-950">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-yellow-400 mb-6">
        About Elite FX AI
      </h2>

      <p className="text-gray-300 text-lg leading-8">
        Elite FX AI is designed for traders who want smarter market analysis,
        automated execution, and disciplined risk management.
        Our AI system helps traders identify high-probability opportunities
        across Forex, Gold, Crypto, and Indices.
      </p>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-black border-t border-gray-800 py-8 text-center text-gray-400">
    <p>© 2026 Elite FX AI. All Rights Reserved.</p>
  </footer>
</div>

); }
