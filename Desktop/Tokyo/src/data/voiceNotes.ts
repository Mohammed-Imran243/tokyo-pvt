export interface VoiceNote {
  id: string;
  title: string;
  audioUrl: string;
  date?: string;
  format?: string;
}

export const voiceNotesData: VoiceNote[] = [
  { id: "vn-1", title: "Appreciation", audioUrl: "/voice/appreciation.opus", format: "OPUS" },
  { id: "vn-2", title: "Voice Note", audioUrl: "/voice/AUD-20251018-WA0024.mp3", format: "MP3" },
  { id: "vn-3", title: "Dare", audioUrl: "/voice/Dare.aac", format: "AAC" },
  { id: "vn-4", title: "Declaration", audioUrl: "/voice/Declaration .opus", format: "OPUS" },
  { id: "vn-5", title: "Demands", audioUrl: "/voice/demands.opus", format: "OPUS" },
  { id: "vn-6", title: "Hate U", audioUrl: "/voice/hate u.opus", format: "OPUS" },
  { id: "vn-7", title: "Hindi Song", audioUrl: "/voice/Hindi Song.mp3", format: "MP3" },
  { id: "vn-8", title: "Humm", audioUrl: "/voice/Humm.opus", format: "OPUS" },
  { id: "vn-9", title: "Order", audioUrl: "/voice/order.opus", format: "OPUS" },
  { id: "vn-10", title: "Rain", audioUrl: "/voice/rain.opus", format: "OPUS" },
  { id: "vn-11", title: "Ulagam", audioUrl: "/voice/ulagam_POOhnWzM.ogg", format: "OGG" },
];

