import React, { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [amountUSD, setAmountUSD] = useState('');
  const [amountINR, setAmountINR] = useState('');

  const handleUSDChange = (e) => {
    const value = e.target.value;
    setAmountUSD(value);
    setAmountINR((value * exchangeRate).toFixed(2));
  };

  const handleINRChange = (e) => {
    const value = e.target.value;
    setAmountINR(value);
    setAmountUSD((value / exchangeRate).toFixed(2));
  };

  const exchangeRate = 83.5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg className="w-10 h-10 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <h1 className="text-xl font-bold">Crypto Bazaar</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#exchange" className="hover:text-emerald-400 transition-colors">Exchange</a>
            <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
            <button className="px-6 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors font-medium">
              Login
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/90 backdrop-blur-md p-4">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="py-2 hover:text-emerald-400 transition-colors">Home</a>
              <a href="#exchange" className="py-2 hover:text-emerald-400 transition-colors">Exchange</a>
              <a href="#features" className="py-2 hover:text-emerald-400 transition-colors">Features</a>
              <a href="#faq" className="py-2 hover:text-emerald-400 transition-colors">FAQ</a>
              <button className="mt-2 px-6 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors font-medium">
                Login
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-24 px-4 container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Buy and Sell USD to INR with Crypto Bazaar
            </h2>
            <p className="text-gray-300 text-lg">
              Fast, secure, and reliable crypto trading platform for converting USD to INR using USDT.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors font-medium">
                Start Trading
              </button>
              <button className="px-8 py-3 rounded-full border border-gray-600 hover:border-emerald-500 transition-colors font-medium">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-2xl transform rotate-6"></div>
            <img src="https://picsum.photos/id/237/600/400"  alt="Crypto Exchange" className="relative rounded-xl shadow-2xl w-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-emerald-400">₹{exchangeRate}</div>
              <p className="text-gray-400 mt-2">USD to INR Rate</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-emerald-400">+2.5%</div>
              <p className="text-gray-400 mt-2">Market Change</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-emerald-400">24/7</div>
              <p className="text-gray-400 mt-2">Live Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Section */}
      <section id="exchange" className="py-24 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Convert USD to INR</h2>
        <div className="max-w-xl mx-auto">
          <div className="bg-gray-800/50 rounded-2xl p-8 shadow-xl border border-gray-700">
            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2">Amount in USD</label>
              <input
                type="number"
                placeholder="0.00"
                value={amountUSD}
                onChange={handleUSDChange}
                className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="flex justify-center my-4">
              <div className="p-2 rounded-full bg-gray-700">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2">Amount in INR</label>
              <input
                type="number"
                placeholder="0.00"
                value={amountINR}
                onChange={handleINRChange}
                className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="mt-8">
              <button className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-medium transition-colors">
                Swap Now
              </button>
            </div>
            <div className="mt-4 text-center text-sm text-gray-400">
              Rate: $1 = ₹{exchangeRate} | Powered by USDT
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Crypto Bazaar?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Transactions</h3>
              <p className="text-gray-400">
                Your funds are protected with advanced security measures and encrypted transfers.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Processing</h3>
              <p className="text-gray-400">
                Instant conversion with minimal fees and lightning-fast transaction speed.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Trusted Platform</h3>
              <p className="text-gray-400">
                Trusted by thousands of users globally for seamless crypto transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "How do I start trading on Crypto Bazaar?",
              a: "Sign up for an account, verify your identity, deposit funds, and you're ready to trade."
            },
            {
              q: "Is there any minimum transaction amount?",
              a: "Yes, the minimum transaction is $10 or equivalent in INR."
            },
            {
              q: "What currencies can I trade with?",
              a: "Currently we support USD to INR trades via USDT (Tether). More currencies coming soon!"
            },
            {
              q: "How long does a transaction take?",
              a: "Transactions are processed instantly after confirming the payment."
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl overflow-hidden">
              <details className="group">
                <summary className="list-none flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="font-medium">{item.q}</h3>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-0 text-gray-400">
                  {item.a}
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Trade Like a Pro?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Join thousands of traders who trust Crypto Bazaar for their daily crypto transactions.
          </p>
          <button className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors font-medium inline-flex items-center">
            Create Free Account
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-8 h-8 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <span className="text-xl font-bold">Crypto Bazaar</span>
              </div>
              <p className="text-gray-400">
                The future of cryptocurrency trading. Fast, secure, and reliable.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400">Home</a></li>
                <li><a href="#exchange" className="hover:text-emerald-400">Exchange</a></li>
                <li><a href="#features" className="hover:text-emerald-400">Features</a></li>
                <li><a href="#faq" className="hover:text-emerald-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-emerald-400">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@cryptobazaar.com</li>
                <li>+91 98765 43210</li>
                <li>Bangalore, India</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Crypto Bazaar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
      }
