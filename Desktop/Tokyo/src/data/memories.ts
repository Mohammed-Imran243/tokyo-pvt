export interface MemoryStats {
  photos: number;
  videos: number;
}

export const memoryStats: MemoryStats = {
  photos: 18,
  videos: 3,
};

export interface GalleryItem {
  id: string;
  type: "photo" | "video";
  url: string;
  caption: string;
  date: string;
  description?: string;
}

export const galleryData: GalleryItem[] = [
  { id: "img-1", type: "photo", url: "/memories/img-1.jpg", caption: "Special Moment ✨", date: "2026-08-13", description: "Special memory captured together." },
  { id: "img-2", type: "photo", url: "/memories/img-2.jpg", caption: "Together 💜", date: "2026-08-13", description: "Moments we treasure." },
  { id: "img-3", type: "photo", url: "/memories/img-3.jpg", caption: "Unforgettable 🎮", date: "2026-08-13", description: "Great memory." },
  { id: "img-4", type: "photo", url: "/memories/img-4.jpg", caption: "Our Quiet Place 🌟", date: "2026-08-13", description: "Peaceful times." },
  { id: "img-5", type: "photo", url: "/memories/img-5.jpg", caption: "Best Memories 💌", date: "2026-08-13", description: "Words and pictures close to heart." },
  { id: "img-6", type: "photo", url: "/memories/img-6.jpg", caption: "Rooftop Nights 🌃", date: "2026-08-13", description: "Beautiful night." },
  { id: "img-7", type: "photo", url: "/memories/img-7.jpg", caption: "Every Star a Memory ⭐", date: "2026-08-13", description: "Shining moments." },
  { id: "img-8", type: "photo", url: "/memories/img-8.jpg", caption: "Victory Moment 🏆", date: "2026-08-13", description: "Unstoppable memory." },
  { id: "img-9", type: "photo", url: "/memories/img-9.jpg", caption: "Late Night Talks 💬", date: "2026-08-13", description: "Late night laughter." },
  { id: "img-10", type: "photo", url: "/memories/img-10.jpg", caption: "Lantern Sky 🏮", date: "2026-08-13", description: "Wishes in the sky." },
  { id: "img-11", type: "photo", url: "/memories/img-11.jpg", caption: "Quiet Smiles 😊", date: "2026-08-13", description: "Pure joy." },
  { id: "img-12", type: "photo", url: "/memories/img-12.jpg", caption: "Always Together 💖", date: "2026-08-13", description: "Forever memory." },
  { id: "img-13", type: "photo", url: "/memories/img-13.jpg", caption: "Forever Memory 💫", date: "2026-08-13", description: "Always in heart." },
  { id: "img-14", type: "photo", url: "/memories/img-14.jpg", caption: "Sweet Moments 🌸", date: "2026-08-13", description: "Sweet memory." },
  { id: "img-15", type: "photo", url: "/memories/img-15.jpg", caption: "Golden Hour 🌅", date: "2026-08-13", description: "Golden memory." },
  { id: "img-16", type: "photo", url: "/memories/img-16.jpg", caption: "Happy Memories 🎉", date: "2026-08-13", description: "Joyful moment." },
  { id: "img-17", type: "photo", url: "/memories/img-17.jpg", caption: "Starry Night 🌙", date: "2026-08-13", description: "Under the stars." },
  { id: "img-18", type: "photo", url: "/memories/img-18.jpg", caption: "With You Always 💕", date: "2026-08-13", description: "Always together." },

  { id: "vid-1", type: "video", url: "/memories/vid-1.mp4", caption: "Memory Video 1 🎬", date: "2026-08-13", description: "Special video clip." },
  { id: "vid-2", type: "video", url: "/memories/vid-2.mp4", caption: "Memory Video 2 🎥", date: "2026-08-13", description: "Special video moment." },
  { id: "vid-3", type: "video", url: "/memories/vid-3.mp4", caption: "Memory Video 3 📹", date: "2026-08-13", description: "Unforgettable video clip." },
];
