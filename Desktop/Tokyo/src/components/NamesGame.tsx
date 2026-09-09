import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { namesGameQuestions, namesGameTitle, namesGameSubtitle, namesGameIntro } from '../data/namesGame';
import { Heart, Sparkles, RotateCcw, CheckCircle2, HelpCircle, ArrowRight, ShieldAlert } from 'lucide-react';
import { AnimeSticker } from './AnimeSticker';


interface NamesGameProps {
  onBack?: () => void;
}

export function NamesGame({ onBack }: NamesGameProps) {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'completed'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [answeredCorrectlyFirstTry, setAnsweredCorrectlyFirstTry] = useState<Set<number>>(new Set());

  const currentQ = namesGameQuestions[currentQuestionIndex];
  const totalQuestions = namesGameQuestions.length;

  const handleStartGame = () => {
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredCorrectlyFirstTry(new Set());
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setIsCorrect(null);
  };

  const handleSelectOption = (option: string) => {
    if (isAnswerSubmitted && isCorrect) return; // Locked once correct
    setSelectedOption(option);
    setIsAnswerSubmitted(false);
    setIsCorrect(null);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption) return;

    const correct = selectedOption === currentQ.correctAnswer;
    setIsAnswerSubmitted(true);
    setIsCorrect(correct);

    if (correct) {
      if (!answeredCorrectlyFirstTry.has(currentQ.id)) {
        setScore((prev) => prev + 1);
        setAnsweredCorrectlyFirstTry((prev) => new Set(prev).add(currentQ.id));
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
      setIsCorrect(null);
    } else {
      setGameState('completed');
    }
  };

  return (
    <div className="py-6 px-3 sm:px-6 max-w-2xl mx-auto min-h-[75vh] flex flex-col items-center justify-center font-sans select-none">
      <AnimatePresence mode="wait">
        {/* ==================================================
            1. GAME INTRO SCREEN
           ================================================== */}
        {gameState === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.5 }}
            className="w-full text-center paper-texture p-6 sm:p-10 rounded-2xl border border-warm-brown/30 shadow-2xl relative overflow-hidden"
          >
            {/* Anime Sticker peeking behind top-right of game intro card */}
            <div className="absolute -top-5 -right-4 sm:-top-6 sm:-right-5 z-20 pointer-events-none">
              <AnimeSticker sectionKey="namesgame-intro" size={54} animation="peek" />
            </div>

            <div className="w-16 h-16 mx-auto rounded-full bg-blush/15 text-blush flex items-center justify-center mb-4 border border-blush/30 shadow-inner">
              <Sparkles className="w-8 h-8" />
            </div>

            <span className="text-xs font-sans tracking-widest uppercase text-blush block mb-1">
              Personal Mini-Game
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl text-cream font-bold mb-2">
              {namesGameTitle}
            </h1>

            <p className="font-handwriting text-lg sm:text-2xl text-blush/90 mb-6 italic">
              “{namesGameSubtitle}”
            </p>

            <div className="w-16 h-0.5 mx-auto bg-warm-gold/40 mb-6" />

            <div className="space-y-2 text-cream/80 text-sm sm:text-base font-serif mb-8 max-w-md mx-auto leading-relaxed">
              <p>{namesGameIntro.line1}</p>
              <p className="italic text-blush">{namesGameIntro.line2}</p>
            </div>

            <button
              onClick={handleStartGame}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blush via-rose-400 to-blush text-scrapbook-bg font-serif text-base font-bold tracking-wider shadow-lg hover:scale-105 transition-all duration-300 border border-cream/20 flex items-center justify-center gap-2 mx-auto"
            >
              <span>{namesGameIntro.startButtonText}</span>
              <Heart className="w-4 h-4 fill-scrapbook-bg" />
            </button>
          </motion.div>
        )}

        {/* ==================================================
            2. PLAYING QUESTIONS SCREEN
           ================================================== */}
        {gameState === 'playing' && (
          <motion.div
            key={`question-${currentQ.id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col items-center"
          >
            {/* Header / Score bar */}
            <div className="w-full flex items-center justify-between mb-4 px-2 text-xs sm:text-sm font-serif text-cream/70">
              <span className="bg-scrapbook-card/80 px-3 py-1 rounded-full border border-warm-brown/30">
                Question {currentQuestionIndex + 1} / {totalQuestions}
              </span>
              <span className="bg-scrapbook-card/80 px-3 py-1 rounded-full border border-warm-brown/30 text-blush font-medium">
                Score: {score * 10} pts
              </span>
            </div>

            {/* Question Card */}
            <div className="w-full paper-texture p-5 sm:p-8 rounded-2xl border border-warm-brown/30 shadow-xl relative mb-4">
              {/* Anime Sticker peeking behind bottom-left corner of Question Card */}
              <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-4 z-20 pointer-events-none">
                <AnimeSticker sectionKey={`namesgame-q-${currentQ.id}`} size={48} animation="idle" />
              </div>
              {/* Question Badge */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-blush text-xs font-sans uppercase tracking-wider font-medium">
                  <HelpCircle className="w-4 h-4" />
                  <span>Round {currentQ.id}</span>
                </div>
                {/* Subtle emoji reaction */}
                <span className="text-xl select-none" aria-hidden="true">
                  {isCorrect ? '✨' : isCorrect === false ? '👀' : currentQ.id % 2 === 0 ? '🌸' : '⚔️'}
                </span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl text-cream font-semibold mb-3 leading-snug">
                {currentQ.question}
              </h2>

              {/* Final Question Special Clue Banner */}
              {currentQ.type === 'final-emotional' && currentQ.clue && (
                <div className="p-3 mb-4 rounded-xl bg-blush/10 border border-blush/30 text-blush text-xs sm:text-sm font-handwriting leading-relaxed">
                  {currentQ.clue}
                </div>
              )}

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedOption === option;
                  const isThisCorrect = isAnswerSubmitted && isSelected && isCorrect;
                  const isThisWrong = isAnswerSubmitted && isSelected && isCorrect === false;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(option)}
                      className={`p-3.5 sm:p-4 rounded-xl text-left font-serif text-sm sm:text-base transition-all flex items-center justify-between border ${
                        isThisCorrect
                          ? 'bg-emerald-950/80 text-emerald-200 border-emerald-500 shadow-md scale-[1.01]'
                          : isThisWrong
                          ? 'bg-rose-950/80 text-rose-200 border-rose-500/80'
                          : isSelected
                          ? 'bg-blush/20 text-cream border-blush/70 shadow-md font-semibold'
                          : 'bg-scrapbook-bg/60 hover:bg-scrapbook-bg text-cream/90 border-warm-brown/30 hover:border-blush/40'
                      }`}
                    >
                      <span>{option}</span>
                      {isThisCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                      {isThisWrong && <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Alert Section */}
              <AnimatePresence>
                {isAnswerSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mt-4 p-3.5 rounded-xl border text-xs sm:text-sm font-serif flex items-center gap-2 ${
                      isCorrect
                        ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-200'
                        : 'bg-rose-950/60 border-rose-500/40 text-rose-200'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{currentQ.correctMessage || "You remembered! ♡"}</span>
                      </>
                    ) : (
                      <>
                        <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                        <span>{currentQ.wrongMessage || "Hmm... not quite 👀 Think again ♡"}</span>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Action Bar (Submit / Next) */}
            <div className="w-full flex items-center justify-between px-1">
              {!isCorrect ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedOption}
                  className={`w-full py-3 rounded-xl font-serif text-sm font-semibold tracking-wider flex items-center justify-center gap-2 transition-all ${
                    !selectedOption
                      ? 'opacity-40 cursor-not-allowed bg-warm-brown/20 text-cream/40 border border-transparent'
                      : 'bg-blush text-scrapbook-bg hover:bg-blush/90 shadow-md active:scale-98'
                  }`}
                >
                  <span>SUBMIT ANSWER</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <motion.button
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  onClick={handleNextQuestion}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-serif text-sm font-bold tracking-wider shadow-lg hover:brightness-110 active:scale-98 flex items-center justify-center gap-2"
                >
                  <span>{currentQuestionIndex < totalQuestions - 1 ? 'NEXT →' : 'SEE RESULT ♡'}</span>
                </motion.button>
              )}
            </div>
          </motion.div>
        )}

        {/* ==================================================
            3. FINAL COMPLETION SCREEN
           ================================================== */}
        {gameState === 'completed' && (
          <motion.div
            key="completion"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full text-center paper-texture p-6 sm:p-10 rounded-2xl border border-warm-brown/30 shadow-2xl relative overflow-hidden"
          >
            {/* Sparkle Particles Animation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-blush/10 rounded-full blur-2xl pointer-events-none"
            />

            <div className="w-20 h-20 mx-auto rounded-full bg-blush/20 text-blush flex items-center justify-center mb-4 border border-blush/40 shadow-lg">
              <Heart className="w-10 h-10 fill-blush" />
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl text-cream font-bold mb-2">
              YOU REMEMBERED THEM ALL ♡
            </h2>

            <p className="text-blush text-sm sm:text-base font-serif mb-4">
              Final Score: <span className="font-bold text-cream text-lg sm:text-xl">{score} / {totalQuestions}</span>
            </p>

            <div className="w-20 h-0.5 mx-auto bg-warm-gold/40 mb-6" />

            {/* Revealed Kullachi Box */}
            <div className="p-6 rounded-2xl bg-scrapbook-bg/80 border border-blush/40 shadow-inner max-w-sm mx-auto mb-8 relative">
              {/* Anime Sticker peeking behind bottom-right corner of winner box */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 z-20 pointer-events-none">
                <AnimeSticker sectionKey="namesgame-completed" size={56} animation="bounce" />
              </div>
              <span className="text-xs font-sans text-cream/50 uppercase tracking-widest block mb-1">
                The Winner
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-blush font-bold tracking-wide mb-2">
                KULLACHI ♡
              </h3>
              <p className="font-handwriting text-cream/80 text-lg sm:text-xl italic">
                “The name I like calling you the most.”
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleStartGame}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blush text-scrapbook-bg font-serif text-sm font-bold tracking-wider hover:bg-blush/90 transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>PLAY AGAIN</span>
              </button>

              {onBack && (
                <button
                  onClick={onBack}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl paper-texture text-cream/70 hover:text-cream border border-warm-brown/30 font-serif text-sm transition-all"
                >
                  <span>BACK TO HOME</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
