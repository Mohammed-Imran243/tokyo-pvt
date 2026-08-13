export interface StarMemory {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  audio?: string;
  video?: string;
  x: number; // 0 to 100 representing percentage of screen width
  y: number; // 0 to 100 representing percentage of screen height
  size: number; // Relative size of the star
}

export const starsData: StarMemory[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `star-${i}`,
  title: `Memory ${i + 1}`,
  date: `2023-0${(i % 9) + 1}-14`,
  description: "A sparkling memory in our night sky.",
  x: Math.random() * 90 + 5,
  y: Math.random() * 90 + 5,
  size: Math.random() * 1.5 + 0.5,
}));
