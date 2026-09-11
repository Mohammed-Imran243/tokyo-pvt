export interface MemoryStats {
  photos: number;
  videos: number;
}

export const memoryStats: MemoryStats = {
  photos: 9,
  videos: 18,
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
  // REAL MEMORY PHOTOS from public/memories/star
  { id: "star-img-1", type: "photo", url: "/memories/star/2nd-meet.jpg", caption: "2nd meet", date: "2026" },
  { id: "star-img-2", type: "photo", url: "/memories/star/fav-pic-of-us.jpg", caption: "Fav pic of us", date: "2026" },
  { id: "star-img-3", type: "photo", url: "/memories/star/first-meet.jpg", caption: "First meet", date: "2026" },
  { id: "star-img-4", type: "photo", url: "/memories/star/first-pic-first-personal-meet.jpg", caption: "First pic of our firrst personal meet", date: "2026" },
  { id: "star-img-5", type: "photo", url: "/memories/star/free-fire-recreation.jpg", caption: "free fire recreation", date: "2026" },
  { id: "star-img-6", type: "photo", url: "/memories/star/matching-jersey.jpg", caption: "Matchin jersey", date: "2026" },
  { id: "star-img-7", type: "photo", url: "/memories/star/snapchat-2030424706.jpg", caption: "Snapchat-2030424706", date: "2026" },
  { id: "star-img-8", type: "photo", url: "/memories/star/thug.jpg", caption: "Thug", date: "2026" },
  { id: "star-img-9", type: "photo", url: "/memories/star/grin-emoji.jpg", caption: "😁😁", date: "2026" },

  // REAL MEMORY VIDEOS from public/memories/star
  { id: "star-vid-1", type: "video", url: "/memories/star/cousin-attrocities-ah.mp4", caption: "Cousin attrocities ah", date: "2026" },
  { id: "star-vid-2", type: "video", url: "/memories/star/ding-ding.mp4", caption: "ding ding", date: "2026" },
  { id: "star-vid-3", type: "video", url: "/memories/star/emma-emma-kaekkutha.mp4", caption: "Emma emma kaekkutha 😏", date: "2026" },
  { id: "star-vid-4", type: "video", url: "/memories/star/foodie.mp4", caption: "Foodie", date: "2026" },
  { id: "star-vid-5", type: "video", url: "/memories/star/happy-happy.mp4", caption: "Happy Happy", date: "2026" },
  { id: "star-vid-6", type: "video", url: "/memories/star/im-watching.mp4", caption: "I'M WATCHING 👀", date: "2026" },
  { id: "star-vid-7", type: "video", url: "/memories/star/intha-kadhal-vanthuvittal.mp4", caption: "Intha kadhal vanthuvittal 🤭", date: "2026" },
  { id: "star-vid-8", type: "video", url: "/memories/star/node.mp4", caption: "Node", date: "2026" },
  { id: "star-vid-9", type: "video", url: "/memories/star/po-pootha-poogampol-alaga.mp4", caption: "Po  pootha poogampol alaga", date: "2026" },
  { id: "star-vid-10", type: "video", url: "/memories/star/pookie.mp4", caption: "Pookie", date: "2026" },
  { id: "star-vid-11", type: "video", url: "/memories/star/push-up.mp4", caption: "push up", date: "2026" },
  { id: "star-vid-12", type: "video", url: "/memories/star/real-mikasa-stunt.mp4", caption: "Real mikasa stunt", date: "2026" },
  { id: "star-vid-13", type: "video", url: "/memories/star/shy-shy.mp4", caption: "shy shy", date: "2026" },
  { id: "star-vid-14", type: "video", url: "/memories/star/vaena-macha-vaena.mp4", caption: "Vaena macha vaena 😂", date: "2026" },
  { id: "star-vid-15", type: "video", url: "/memories/star/sweat-giggle.mp4", caption: "😅🤭", date: "2026" },
  { id: "star-vid-16", type: "video", url: "/memories/star/peeking-eye.mp4", caption: "🫣", date: "2026" },
  { id: "star-vid-17", type: "video", url: "/memories/star/bot-uh.mp4", caption: "Bot uh", date: "2026" },
  { id: "star-vid-18", type: "video", url: "/memories/star/korangu.mp4", caption: "Korangu", date: "2026" },
];