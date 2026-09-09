export interface VoiceNote {
  id: string;
  title: string;
  audioUrl: string;
  date?: string;
  format?: string;
}

export const voiceNotesData: VoiceNote[] = [
  { id: "vn-1", title: "Appreciation", audioUrl: "/voice/appreciation.mp3", format: "MP3" },
  { id: "vn-2", title: "Voice Note", audioUrl: "/voice/aud-20251018-wa0024.mp3", format: "MP3" },
  { id: "vn-3", title: "Dare", audioUrl: "/voice/dare.mp3", format: "MP3" },
  { id: "vn-4", title: "Declaration", audioUrl: "/voice/declaration.mp3", format: "MP3" },
  { id: "vn-5", title: "Demands", audioUrl: "/voice/demands.mp3", format: "MP3" },
  { id: "vn-6", title: "Hate U", audioUrl: "/voice/hate-u.mp3", format: "MP3" },
  { id: "vn-7", title: "Hindi Song", audioUrl: "/voice/hindi-song.mp3", format: "MP3" },
  { id: "vn-8", title: "Humm", audioUrl: "/voice/humm.mp3", format: "MP3" },
  { id: "vn-9", title: "Order", audioUrl: "/voice/order.mp3", format: "MP3" },
  { id: "vn-10", title: "Rain", audioUrl: "/voice/rain.mp3", format: "MP3" },
  { id: "vn-11", title: "Ulagam", audioUrl: "/voice/ulagam_poohnwzm.mp3", format: "MP3" },
];

