export interface Question {
  id: number;
  type: 'multiple-choice' | 'final-emotional';
  question: string;
  clue?: string;
  options: string[];
  correctAnswer: string;
  correctMessage?: string;
  wrongMessage?: string;
}

export const namesGameTitle = "ALL YOUR NAMES ♡";
export const namesGameSubtitle = "Same you... different names... each one a memory ♡";

export const namesGameIntro = {
  line1: "I've called you many names...",
  line2: "Let's see how well you remember them.",
  startButtonText: "LET'S PLAY ♡",
};

export const namesGameQuestions: Question[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "Before all the fancy names... which was one of the first ways I used to call you?",
    clue: "The very beginning of our journey.",
    options: ["Hermione", "Akka / Aapa", "Kullachi", "My Lady"],
    correctAnswer: "Akka / Aapa",
    correctMessage: "You remembered! That was right at the beginning ♡",
    wrongMessage: "Hmm... not quite 👀 Think back to the start!",
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: "Which name sounds like someone who deserves royal treatment?",
    clue: "Fit for royalty ✨",
    options: ["Bot Uh", "Teacher", "My Lady", "Hina"],
    correctAnswer: "My Lady",
    correctMessage: "Correct! Your Royal Highness ♡",
    wrongMessage: "Not that one! Think royal treatment 👑",
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "Which name came from one of our anime worlds?",
    clue: "A fierce warrior from behind the walls ⚔️",
    options: ["Mikasa", "Teacher", "Eli Kutty", "Lady Rahi"],
    correctAnswer: "Mikasa",
    correctMessage: "AOT era remembered! ⚔️♡",
    wrongMessage: "Think of our favorite anime shows 👀",
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: "Which of these was another name I used for you?",
    clue: "Another anime reference from our watchlist 🌸",
    options: ["Hina", "Bot Uh", "Teacher", "My Lady"],
    correctAnswer: "Hina",
    correctMessage: "Spot on! Hina ♡",
    wrongMessage: "Try again! Think anime 🌸",
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "Which name sounds like I decided to make your name extra special?",
    clue: "Adding an extra touch of elegance.",
    options: ["Lady Rahi", "Bot Uh", "Akka / Aapa", "Eli Kutty"],
    correctAnswer: "Lady Rahi",
    correctMessage: "Lady Rahi indeed! ✨♡",
    wrongMessage: "Hmm... not quite 👀",
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "Apparently, at some point you became my...",
    clue: "Class is now in session 📚",
    options: ["Teacher", "My Lady", "Mikasa", "Kullachi"],
    correctAnswer: "Teacher",
    correctMessage: "Yes, Teacher! 📚♡",
    wrongMessage: "Think of school/learning! 🍎",
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: "Which name sounds like I temporarily forgot how humans work? 😂",
    clue: "Beep boop 🤖",
    options: ["Hina", "My Lady", "Bot Uh", "Hermione"],
    correctAnswer: "Bot Uh",
    correctMessage: "Bot Uh! 😂🤖",
    wrongMessage: "Beep boop... try again! 🤖",
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: "Which one of these is one of the cute names I've called you?",
    clue: "A tiny cute little nickname 🐾",
    options: ["Eli Kutty", "Teacher", "Mikasa", "Lady Rahi"],
    correctAnswer: "Eli Kutty",
    correctMessage: "Eli Kutty! So cute ♡",
    wrongMessage: "Think super cute! 🐾",
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: "Out of all these names, which one do you think became the most special?",
    clue: "The name that holds the biggest place in my heart.",
    options: ["Hermione", "Lady Rahi", "Kullachi", "Hina"],
    correctAnswer: "Kullachi",
    correctMessage: "Kullachi, always ♡",
    wrongMessage: "You know this one! Think of the name I love most ♡",
  },
  {
    id: 10,
    type: 'final-emotional',
    question: "But which name became yours? ♡",
    clue: "Hermione • Mikasa • Hina • My Lady • Lady Rahi • Eli Kutty • Teacher • Bot Uh • Akka / Aapa",
    options: ["Hermione", "Lady Rahi", "Eli Kutty", "Kullachi ♡"],
    correctAnswer: "Kullachi ♡",
    correctMessage: "KULLACHI ♡ The name I like calling you the most.",
    wrongMessage: "Think of our ultimate name ♡",
  },
];
