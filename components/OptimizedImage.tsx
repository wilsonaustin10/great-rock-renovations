'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

export default function OptimizedImage({
  src,
  alt,
  className,
  sizes,
  priority = false,
  fill = false,
  width,
  height,
  style,
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  
  // Convert old PNG paths to optimized WebP
  const getOptimizedSrc = () => {
    if (imageError) return src; // Fallback to original if optimized fails
    
    // Check if this is a Fence and Patio image that needs optimization
    if (src.includes('/Fence and Patio/') && src.endsWith('.png')) {
      const filename = src.split('/').pop()?.replace('.png', '');
      return `/images/optimized/Fence and Patio/${filename}-sm.webp`;
    }
    
    return src;
  };
  
  const imageProps = fill 
    ? { fill: true }
    : { width: width || 800, height: height || 600 };
    
  return (
    <Image
      {...imageProps}
      src={getOptimizedSrc()}
      alt={alt}
      className={className}
      sizes={sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
      loading={priority ? undefined : 'lazy'}
      priority={priority}
      style={style}
      onError={() => {
        setImageError(true);
      }}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    />
  );
}