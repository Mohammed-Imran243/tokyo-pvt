import { galleryData } from './memories';

export interface StarMemory {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  x: number; // 0 to 100 representing percentage of screen width
  y: number; // 0 to 100 representing percentage of screen height
  size: number; // Relative size of the star
}

// Generate beautiful, evenly distributed constellation coordinates for all memory items
const generateStarCoordinates = (count: number) => {
  const coords = [];
  const cols = 8;
  const rows = Math.ceil(count / cols);
  
  for (let i = 0; i < count; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    
    // Base grid position
    const baseX = 8 + (col * (84 / (cols - 1)));
    const baseY = 10 + (row * (76 / (rows - 1)));
    
    // Deterministic organic offset so stars form a beautiful constellation
    const jitterX = Math.sin(i * 3.7) * 3.2;
    const jitterY = Math.cos(i * 2.3) * 3.2;
    
    const x = Math.min(94, Math.max(6, Math.round((baseX + jitterX) * 10) / 10));
    const y = Math.min(88, Math.max(8, Math.round((baseY + jitterY) * 10) / 10));
    const size = Math.round((1.2 + (Math.abs(Math.sin(i * 1.5)) * 0.7)) * 10) / 10;
    
    coords.push({ x, y, size });
  }
  return coords;
};

const starCoordinates = generateStarCoordinates(galleryData.length);

export const starsData: StarMemory[] = starCoordinates.map((coord, i) => {
  const memory = galleryData[i];
  const rawName = memory?.url ? (memory.url.split('/').pop() || `file-${i + 1}`) : `file-${i + 1}`;
  const decodedName = decodeURIComponent(rawName);
  // Strip file extension (.jpg, .png, .mp4, .mov, etc.) so file type is NOT mentioned
  const fileName = decodedName.replace(/\.[^/.]+$/, '');

  return {
    id: `star-${i + 1}`,
    title: fileName,
    date: memory?.date || '2026',
    description: memory?.description || 'Some memories deserve their own star. ♡',
    image: memory?.url || `/memories/star/First meet.jpg`,
    x: coord.x,
    y: coord.y,
    size: coord.size,
  };
});

