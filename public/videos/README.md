# Video Instructions

## Adding Your Hero Background Video

1. **Place your video file here** in the `/public/videos/` folder
2. **Name it** `hero-video.mp4` (or update the filename in `/components/sections/Hero.tsx`)

## Video Recommendations

### Format & Encoding
- **Format**: MP4 (H.264 codec for best compatibility)
- **Resolution**: 1920x1080 (1080p) recommended
- **File Size**: Keep under 10-15MB for faster loading
- **Duration**: 15-30 seconds (loops automatically)

### Content Tips
- Construction site footage
- Time-lapse of building projects
- Team working on site
- Completed project showcases
- Drone footage of properties

### Optimization
- Use video compression tools like:
  - HandBrake (free)
  - Adobe Media Encoder
  - FFmpeg command line
  - Online: CloudConvert, Clideo

### Example FFmpeg command to compress:
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k hero-video.mp4
```

## Current Setup
- The Hero component currently uses a placeholder video from Coverr
- It includes:
  - Auto-play and loop
  - Mute/unmute toggle button
  - Fallback image for mobile/slow connections
  - Dark overlay for text readability
  - Smooth loading transitions

## To Update the Video
1. Add your video file to this folder
2. Update the source in `/components/sections/Hero.tsx` line 39:
   ```jsx
   <source src="/videos/hero-video.mp4" type="video/mp4" />
   ```