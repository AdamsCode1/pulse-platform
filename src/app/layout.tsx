// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PULSE - The Pulse of University Life',
  description: 'Connect with events, societies, and local businesses at your university',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow-sm fixed w-full z-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold pulse-text">PULSE</span>
              </div>
              
              <nav className="hidden md:block">
                <ul className="flex space-x-8">
                  <li><a href="#" className="font-medium hover:text-pulse-purple transition">Home</a></li>
                  <li><a href="#" className="font-medium hover:text-pulse-purple transition">Events</a></li>
                  <li><a href="#" className="font-medium hover:text-pulse-purple transition">Societies</a></li>
                  <li><a href="#" className="font-medium hover:text-pulse-purple transition">Businesses</a></li>
                  <li><a href="#" className="font-medium hover:text-pulse-purple transition">About</a></li>
                </ul>
              </nav>
              
              <div className="flex space-x-2">
                <a href="#" className="px-4 py-2 border border-pulse-purple text-pulse-purple rounded hover:bg-pulse-light transition">Log In</a>
                <a href="#" className="px-4 py-2 pulse-gradient-bg text-white rounded hover:opacity-90 transition">Sign Up</a>
              </div>
              
              <button className="md:hidden text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}