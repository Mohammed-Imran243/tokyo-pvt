export interface VoiceNote {
  id: string;
  title: string;
  date: string;
  duration: string;
  audioUrl: string; // Placeholder for now
}

export const voiceNotesData: VoiceNote[] = [
  {
    id: "vn-1",
    title: "Birthday Wish",
    date: "Special Day",
    duration: "1:24",
    audioUrl: "", 
  },
  {
    id: "vn-2",
    title: "Late Night Talk",
    date: "3:00 AM",
    duration: "4:15",
    audioUrl: "", 
  },
  {
    id: "vn-3",
    title: "Just Because",
    date: "A random Tuesday",
    duration: "0:45",
    audioUrl: "", 
  },
  {
    id: "vn-4",
    title: "I Miss You",
    date: "Miles away",
    duration: "1:10",
    audioUrl: "", 
  },
  {
    id: "vn-5",
    title: "Random Conversation",
    date: "Everyday",
    duration: "2:30",
    audioUrl: "", 
  }
];
