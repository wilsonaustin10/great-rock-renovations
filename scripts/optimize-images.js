const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const QUALITY = {
  webp: 85,
  avif: 80,
  jpg: 85
};

const SIZES = [
  { width: 640, suffix: 'sm' },
  { width: 1024, suffix: 'md' },
  { width: 1920, suffix: 'lg' }
];

async function processImage(inputPath, outputDir) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const ext = path.extname(inputPath).toLowerCase();
  
  console.log(`Processing ${inputPath}...`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Generate WebP versions at different sizes
    for (const size of SIZES) {
      if (metadata.width >= size.width) {
        const webpOutput = path.join(outputDir, `${filename}-${size.suffix}.webp`);
        await image
          .resize(size.width, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ quality: QUALITY.webp })
          .toFile(webpOutput);
        console.log(`  Created: ${webpOutput}`);
      }
    }
    
    // Also create optimized original format at original size
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const optimizedOutput = path.join(outputDir, `${filename}-optimized${ext}`);
      await image
        .jpeg({ quality: QUALITY.jpg, progressive: true })
        .toFile(optimizedOutput);
      console.log(`  Created optimized: ${optimizedOutput}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

async function optimizeImagesInDirectory(inputDir, outputDir) {
  try {
    await fs.mkdir(outputDir, { recursive: true });
    
    const files = await fs.readdir(inputDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    );
    
    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      await processImage(inputPath, outputDir);
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Process Fence and Patio images
const fencePatioDir = path.join(__dirname, '../public/images/Fence and Patio');
const optimizedDir = path.join(__dirname, '../public/images/optimized/Fence and Patio');

optimizeImagesInDirectory(fencePatioDir, optimizedDir);