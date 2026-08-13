export interface TimelineEntry {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string | null;
  audio?: string | null;
  video?: string | null;
  quote?: string | null;
}

export const timelineData: TimelineEntry[] = [
  {
    id: "timeline-1",
    title: "The Day We Met",
    date: "A long time ago",
    description: "The beginning of everything.",
  },
  {
    id: "timeline-2",
    title: "First Conversation",
    date: "Early Days",
    description: "That awkward little conversation that somehow became the start of something special.",
  },
  {
    id: "timeline-3",
    title: "Endless Nights",
    date: "Late nights",
    description: "Games, movies, calls and conversations that somehow never seemed long enough.",
  },
  {
    id: "timeline-4",
    title: "Tough Times",
    date: "Through the storm",
    description: "Not every chapter was easy, but we still made memories.",
  },
  {
    id: "timeline-5",
    title: "The Reunion",
    date: "Back together",
    description: "Somehow, after everything, we found our way back.",
  },
  {
    id: "timeline-6",
    title: "Today",
    date: "Present",
    description: "Still here. Still writing the story.",
  },
  {
    id: "timeline-7",
    title: "Future Chapters",
    date: "Tomorrow",
    description: "So much more to come. ✨",
  }
];
