'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Clock, Award, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

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
          {/* Placeholder video - replace /videos/hero-video.mp4 with your actual video */}
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Alternative online placeholder for now */}
          <source src="https://cdn.coverr.co/videos/coverr-construction-workers-on-site-7778/1080p.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback image for mobile or if video fails to load */}
        <div 
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop")',
            zIndex: -1
          }}
        />
        
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 py-2 rounded-full mb-8">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-semibold">Houston&apos;s Most Trusted Contractor</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Dreams,{' '}
            <span className="text-primary-400">One Project</span> at a Time
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Professional construction and renovation services in Houston, TX. 
            From deck building to complete home remodeling, we deliver quality 
            craftsmanship that lasts.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-md hover:bg-primary-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Free Quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold text-lg"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Clock className="h-8 w-8 text-primary-400 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">15+</p>
              <p className="text-sm text-gray-300">Years Experience</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Award className="h-8 w-8 text-primary-400 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Shield className="h-8 w-8 text-primary-400 mx-auto mb-2" />
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-sm text-gray-300">Satisfaction Rate</p>
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