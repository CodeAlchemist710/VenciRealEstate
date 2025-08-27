'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import MuxVideo from '@/components/MuxVideo';

export default function HomePage() {
  const [currentText, setCurrentText] = useState(0);
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const rotatingTexts = [
    'LUXURY',
    'REAL ESTATE',
    'LIFESTYLE',
    'INVESTMENT'
  ];

  // Rotate text every 4 seconds with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your inquiry! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email signup:', email);
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative w-screen h-screen overflow-hidden" style={{ margin: 0, padding: 0 }}>
      {/* Video Background */}
      <MuxVideo 
        playbackId="SJtMmzbwrupZu5LYsvhGuKvb8OtU9ErFM8BnwXsrF0200"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 via-gray-700/40 to-gray-900/60 pointer-events-none z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
        {/* Logo */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2" style={{ marginLeft: '-6px' }}>
        <Image
          src="/logo.png"
          alt="Venci Lopez Real Estate"
          width={1800}
          height={900}
          className="w-auto h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[32rem] object-contain"
          priority
        />
        </div>

        {/* Text Section */}
        <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 text-center">
          {/* Rotating Text */}
          <h1 className="text-2xl md:text-4xl font-extralight text-white transition-all duration-350" style={{ fontFamily: 'Raleway, sans-serif', marginBottom: '30px' }}>
          {rotatingTexts[currentText]}
          </h1>

          {/* Business Location Section */}
          <h3 className="text-1xl md:text-2xl font-extralight text-white mb-8" style={{ fontFamily: 'Raleway, sans-serif' }}>
            COSTA RICA
          </h3>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light tracking-wide" style={{ fontFamily: 'Raleway, sans-serif' }}>
          A paradise is about to unfold.
          </p>

          <p className="text-lg text-gray-300" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Discover luxury living today
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
          </svg>
        </div>
        </div>
      </div>
      </section>

      {/* Second Section - Asymmetrical Layout like Bloom */}
      <section className="relative bg-gradient-to-b from-green-950 to-emerald-900 overflow-hidden">
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Main Content Area */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto px-8 py-20">
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-12 leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                DISCOVER THE ART OF
                <br />
                LIVING WITH LUXURY.
              </h2>

              {/* Social Media Section */}
              <div className="mb-12">
                <p className="text-white text-lg mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>Follow us</p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/vencilopez.realestate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/vencilopezrealestate/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Email Signup & Decorative Element */}
            <div className="flex flex-col justify-center items-center lg:items-end">
              {/* Decorative Flower SVG */}
              <div className="mb-12 opacity-30">
                <svg width="200" height="200" viewBox="0 0 200 200" className="text-white">
                  <circle cx="100" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="150" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="100" cy="150" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="50" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
                </svg>
              </div>

              {/* Email Signup Form */}
              <div className="w-full max-w-md">
                <h3 className="text-white text-lg mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  SIGN UP to hear about our
                  <br />
                  services, events and curated
                  <br />
                  experiences:
                </h3>
                <form onSubmit={handleEmailSignup} className="space-y-4">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="bg-transparent border-white/30 text-white placeholder:text-white/60 focus:border-white"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-transparent border border-white text-white hover:bg-white hover:text-green-900 transition-all duration-300"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-8 pb-20">
            <div className="text-center">
              <h4 className="text-white text-sm font-medium mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Natural Paradise</h4>
              <div className="w-16 h-px bg-white/30 mx-auto"></div>
            </div>
            <div className="text-center">
              <h4 className="text-white text-sm font-medium mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Luxury Living</h4>
              <div className="w-16 h-px bg-white/30 mx-auto"></div>
            </div>
            <div className="text-center">
              <h4 className="text-white text-sm font-medium mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Prime Location</h4>
              <div className="w-16 h-px bg-white/30 mx-auto"></div>
            </div>
            <div className="text-center">
              <h4 className="text-white text-sm font-medium mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Investment Opportunity</h4>
              <div className="w-16 h-px bg-white/30 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-emerald-900 to-green-950" style={{ fontFamily: 'Raleway, sans-serif' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-wide" style={{ fontFamily: 'Raleway, sans-serif' }}>
              GET IN TOUCH
            </h2>
            <p className="text-lg text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Ready to discover your dream property? Let's start a conversation.
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-green-400/20 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-green-400/30 text-white placeholder:text-green-200 focus:border-green-400 focus:ring-green-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/10 border-green-400/30 text-white placeholder:text-green-200 focus:border-green-400 focus:ring-green-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-white/10 border-green-400/30 text-white placeholder:text-green-200 focus:border-green-400 focus:ring-green-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-white/10 border-green-400/30 text-white placeholder:text-green-200 focus:border-green-400 focus:ring-green-400 resize-none"
                    placeholder="Tell us about your ideal property..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-green-950 border-t border-green-400/10" style={{ fontFamily: 'Raleway, sans-serif' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm mb-4 md:mb-0" style={{ fontFamily: 'Raleway, sans-serif' }}>
            © 2024 Venci Lopez Real Estate. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/vencilopez.realestate/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/vencilopezrealestate/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
