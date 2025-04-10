// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="pulse-gradient-bg text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-pulse-slow">PULSE</h1>
          <p className="text-xl mb-8">The Pulse of University Life</p>
          <Link 
            href="#universities" 
            className="bg-white text-pulse-purple px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300"
          >
            Find Your University
          </Link>
        </div>
      </section>

      {/* Universities Section */}
      <section id="universities" className="py-16 bg-pulse-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            Top Universities
            <span className="block w-20 h-1 pulse-gradient-bg mx-auto mt-4"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university) => (
              <div key={university.id} className="bg-white rounded-lg pulse-shadow overflow-hidden transition-transform hover:-translate-y-2 duration-300">
                <div className="p-6">
                  <div className="w-16 h-16 rounded-full pulse-gradient-bg text-white flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                    {university.shortCode}
                  </div>
                  <h3 className="text-xl font-bold text-center pulse-text mb-2">
                    {university.name}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    Connect with events and societies at {university.name}
                  </p>
                  <Link 
                    href={university.slug} 
                    className="block w-full text-center pulse-gradient-bg text-white py-2 rounded-md hover:opacity-90 transition duration-300"
                  >
                    {university.shortCode} PULSE
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            Why Join PULSE?
            <span className="block w-20 h-1 pulse-gradient-bg mx-auto mt-4"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="bg-white rounded-lg pulse-shadow p-6 text-center transition-transform hover:-translate-y-2 duration-300">
                <div className="text-4xl pulse-text mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold pulse-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sign Up Section */}
      <section className="py-16 pulse-gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the PULSE Network</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Sign up for updates and be the first to know about our launch at your university
          </p>
          
          <form className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-l-md focus:outline-none"
              required
            />
            <button 
              type="submit" 
              className="bg-pulse-dark text-white px-6 py-3 rounded-r-md font-medium hover:bg-black transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-pulse-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">PULSE</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Our Team</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Blog</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Help Center</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Events Calendar</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Society Tools</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Student Deals</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Universities</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Oxford</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Cambridge</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition">Durham</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PULSE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Data
const universities = [
  { id: 1, name: 'University of Oxford', shortCode: 'OX', slug: '/universities/oxford' },
  { id: 2, name: 'University of Cambridge', shortCode: 'CAM', slug: '/universities/cambridge' },
  { id: 3, name: 'Imperial College London', shortCode: 'ICL', slug: '/universities/imperial' },
  { id: 4, name: 'London School of Economics', shortCode: 'LSE', slug: '/universities/lse' },
  { id: 5, name: 'University College London', shortCode: 'UCL', slug: '/universities/ucl' },
  { id: 6, name: 'Durham University', shortCode: 'DU', slug: '/universities/durham' },
];

const features = [
  { 
    id: 1, 
    title: 'Events', 
    icon: '📅', 
    description: 'Discover and keep track of all the exciting events happening at your university.' 
  },
  { 
    id: 2, 
    title: 'Local Businesses', 
    icon: '🏪', 
    description: 'Exclusive student deals and offers from businesses around your campus.' 
  },
  { 
    id: 3, 
    title: 'Societies', 
    icon: '👥', 
    description: 'Connect with societies and manage your memberships all in one place.' 
  },
];