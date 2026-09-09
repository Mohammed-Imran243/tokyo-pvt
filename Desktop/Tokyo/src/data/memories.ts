export interface MemoryStats {
  photos: number;
  videos: number;
}

export const memoryStats: MemoryStats = {
  photos: 9,
  videos: 16,
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
  // REAL MEMORY PHOTOS from C:\Users\NICK\Downloads\tk i\star
  { id: "star-img-1", type: "photo", url: "/memories/star/2nd meet.jpg", caption: "2nd meet", date: "2026" },
  { id: "star-img-2", type: "photo", url: "/memories/star/Fav pic of us.jpg", caption: "Fav pic of us", date: "2026" },
  { id: "star-img-3", type: "photo", url: "/memories/star/First meet.jpg", caption: "First meet", date: "2026" },
  { id: "star-img-4", type: "photo", url: "/memories/star/First pic of our firrst personal meet.jpg", caption: "First pic of our firrst personal meet", date: "2026" },
  { id: "star-img-5", type: "photo", url: "/memories/star/free fire recreation.jpg", caption: "free fire recreation", date: "2026" },
  { id: "star-img-6", type: "photo", url: "/memories/star/Matchin jersey.jpg", caption: "Matchin jersey", date: "2026" },
  { id: "star-img-7", type: "photo", url: "/memories/star/Snapchat-2030424706.jpg", caption: "Snapchat-2030424706", date: "2026" },
  { id: "star-img-8", type: "photo", url: "/memories/star/Thug.jpg", caption: "Thug", date: "2026" },
  { id: "star-img-9", type: "photo", url: "/memories/star/😁😁.jpg", caption: "😁😁", date: "2026" },

  // REAL MEMORY VIDEOS from C:\Users\NICK\Downloads\tk i\star
  { id: "star-vid-1", type: "video", url: "/memories/star/Cousin attrocities ah.mp4", caption: "Cousin attrocities ah", date: "2026" },
  { id: "star-vid-2", type: "video", url: "/memories/star/ding ding.mp4", caption: "ding ding", date: "2026" },
  { id: "star-vid-3", type: "video", url: "/memories/star/Emma emma kaekkutha 😏.mp4", caption: "Emma emma kaekkutha 😏", date: "2026" },
  { id: "star-vid-4", type: "video", url: "/memories/star/Foodie.mp4", caption: "Foodie", date: "2026" },
  { id: "star-vid-5", type: "video", url: "/memories/star/Happy Happy.mp4", caption: "Happy Happy", date: "2026" },
  { id: "star-vid-6", type: "video", url: "/memories/star/I'M WATCHING 👀.mp4", caption: "I'M WATCHING 👀", date: "2026" },
  { id: "star-vid-7", type: "video", url: "/memories/star/Intha kadhal vanthuvittal 🤭.mp4", caption: "Intha kadhal vanthuvittal 🤭", date: "2026" },
  { id: "star-vid-8", type: "video", url: "/memories/star/Node.mp4", caption: "Node", date: "2026" },
  { id: "star-vid-9", type: "video", url: "/memories/star/Po  pootha poogampol alaga.mp4", caption: "Po  pootha poogampol alaga", date: "2026" },
  { id: "star-vid-10", type: "video", url: "/memories/star/Pookie.mp4", caption: "Pookie", date: "2026" },
  { id: "star-vid-11", type: "video", url: "/memories/star/push up.mp4", caption: "push up", date: "2026" },
  { id: "star-vid-12", type: "video", url: "/memories/star/Real mikasa stunt.mp4", caption: "Real mikasa stunt", date: "2026" },
  { id: "star-vid-13", type: "video", url: "/memories/star/shy shy.mp4", caption: "shy shy", date: "2026" },
  { id: "star-vid-14", type: "video", url: "/memories/star/Vaena macha vaena 😂.mp4", caption: "Vaena macha vaena 😂", date: "2026" },
  { id: "star-vid-15", type: "video", url: "/memories/star/😅🤭.mp4", caption: "😅🤭", date: "2026" },
  { id: "star-vid-16", type: "video", url: "/memories/star/🫣.mp4", caption: "🫣", date: "2026" },
];
