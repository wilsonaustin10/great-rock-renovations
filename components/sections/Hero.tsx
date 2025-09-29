'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Clock, Award, Volume2, VolumeX, Phone } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import PhoneLink from '@/components/PhoneLink';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down video slightly for a more cinematic feel
    }
  }, [isVideoLoaded]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/videos/Great Rock Hero Video.mp4" type="video/mp4" />
          {/* Fallback video in case the main video fails to load */}
          <source src="https://cdn.coverr.co/videos/coverr-construction-workers-on-site-7778/1080p.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image for mobile or if video fails to load */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`} style={{ zIndex: -1 }}>
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop"
            alt="Construction site background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Gradient overlay for visual depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"></div>
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-24 right-4 z-20 p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-200 text-white"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-4xl">
          {/* Prominent Phone Number - NEW */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <PhoneLink
              phone="832-979-6414"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 animate-pulse"
              ariaLabel="Call us at 832-979-6414"
            >
              <Phone className="h-6 w-6" />
              <span className="text-xl">Call Now: (832) 979-6414</span>
            </PhoneLink>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 py-2 rounded-full self-center">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-semibold">Licensed & Insured</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Building Dreams,{' '}
            <span className="text-blue-400">One Project</span> at a Time
          </h1>
          
          {/* Subheading */}
          <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-6 max-w-3xl">
            Houston&apos;s Preferred Contractor For Building Projects Including:
          </p>

          {/* Services List */}
          <ul className="text-sm md:text-base lg:text-lg text-gray-200 mb-6 space-y-0.5 md:space-y-1 max-w-3xl">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Decks, Fences, Patios, Pergolas</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Roofing and Siding Replacement</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Kitchen and Bathroom Remodeling</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>Commercial or Residential</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span>
              <span>No Small Repairs</span>
            </li>
          </ul>

          {/* CTAs - Enhanced for Better Conversion */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500  mobile-cta sm:w-auto"
            >
              Get Your Free Quote
              <ArrowRight className="h-5 w-5 animate-bounce-horizontal" />
            </Link>
            <PhoneLink
              phone="832-979-6414"
              className="inline-flex items-center justify-center gap-2 bg-white/90 backdrop-blur-md border-2 border-white text-gray-900 px-6 py-4 rounded-lg hover:bg-white hover:scale-105 transition-all duration-300 font-bold text-base shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white  mobile-cta sm:w-auto"
              ariaLabel="Call us at 832-979-6414"
            >
              <Phone className="h-5 w-5" />
              Call (832) 979-6414
            </PhoneLink>
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-6 py-4 rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 font-semibold text-base shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30  mobile-cta sm:w-auto"
            >
              View Our Work
            </Link>
          </div>
          
          {/* Quick Response Promise */}
          <div className="bg-yellow-400/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg inline-flex items-center gap-2 mb-12">
            <Clock className="h-5 w-5" />
            <span className="font-bold">Quick Response</span>
          </div>

          {/* Trust Indicators - Enhanced Visual Hierarchy */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl">
            <div className="text-center bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 group">
              <Clock className="h-8 w-8 md:h-10 md:w-10 text-blue-400 mx-auto mb-2 group-hover:animate-pulse" />
              <p className="text-3xl md:text-4xl font-bold text-white">12+</p>
              <p className="text-sm md:text-base text-gray-200">Years Experience</p>
            </div>
            <div className="text-center bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 group">
              <Award className="h-8 w-8 md:h-10 md:w-10 text-blue-400 mx-auto mb-2 group-hover:animate-pulse" />
              <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
              <p className="text-sm md:text-base text-gray-200">Happy Families</p>
            </div>
            <div className="text-center bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 group">
              <Shield className="h-8 w-8 md:h-10 md:w-10 text-blue-400 mx-auto mb-2 group-hover:animate-pulse" />
              <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
              <p className="text-sm md:text-base text-gray-200">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;