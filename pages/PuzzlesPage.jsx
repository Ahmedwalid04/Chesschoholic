import React, { useState, useCallback } from 'react';
import { Chessboard } from 'react-chessboard';
const API_BASE_URL = "https://localhost:7072";

export function PuzzlesPage() {
  const fetchRandomPuzzle = useCallback(async () => {
    console.log("Fetching from /puzzles/random");
    try {
      const response = await fetch(`${API_BASE_URL}/puzzles/random`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch puzzle:", error);
      return null;
    }
  }, []);

  const submitPuzzleSolution = useCallback(async (puzzleId, move) => {
    console.log(`Submitting to /puzzles/${puzzleId}/submit`);
    try {
      const response = await fetch(`${API_BASE_URL}/puzzles/${puzzleId}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ move: move }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error("Failed to submit solution:", error);
      return { isCorrect: false, message: "Error connecting to server." };
    }
  }, []);

  // === PUZZLE STATE ===
  const [position, setFen] = useState("8/1nK5/4k3/6kK/3P2K1/7r/2b3B1/KR1Q1nb1");
  const [puzzle, setPuzzle] = useState(null);
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [isLoadingPuzzle, setIsLoadingPuzzle] = useState(false);

  // === PUZZLE LOGIC ===
  const handleGetPuzzle = useCallback(async () => {
    setIsLoadingPuzzle(true);
    setFeedback({ type: '', message: '' });
    const fetchedPuzzle = await fetchRandomPuzzle();

    if (fetchedPuzzle) {
      setPuzzle(fetchedPuzzle);
      setFen(fetchedPuzzle.fen);
    } else {
      setFeedback({ type: 'error', message: 'Failed to load puzzle. Try again.' });
    }
    setIsLoadingPuzzle(false);
  }, [fetchRandomPuzzle]);

  const onPieceDrop = useCallback(async (sourceSquare, targetSquare) => {
    if (!puzzle) return false;
    const move = `${sourceSquare}${targetSquare}`;

    // This now passes the puzzle ID correctly
    const response = await submitPuzzleSolution(puzzle.id, move);

    if (response.isCorrect) {
      setFeedback({ type: 'success', message: response.message });
    } else {
      setFeedback({ type: 'error', message: response.message });
    }
    return false;
  }, [puzzle, submitPuzzleSolution]);
  
  // === PUZZLE RENDER ===
  const chessboardOptions = {
    position,
    id: 'position'
  };
  
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-stone-800 mb-2">
          <span className="text-stone-800">♟</span> Chess Puzzles
        </h1>
        <p className="text-lg text-stone-600">Find the best move and improve your tactics!</p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* --- Column 1: The Chessboard --- */}
        <div className="lg:col-span-2">
          <div className="bg-stone-50 rounded-2xl shadow-xl p-6 border border-stone-300">
            <Chessboard
              id="PuzzleBoard"
              options={chessboardOptions}
              onPieceDrop={onPieceDrop}
            />
          </div>
        </div>

      {/* --- Column 2: The Controls --- */}
      <div className="lg:col-span-1 flex flex-col gap-6">
        {/* Controls Card */}
        <div className="bg-stone-50 rounded-2xl shadow-xl p-6 border border-stone-300">
          <h2 className="text-2xl font-bold text-stone-800 mb-2">Challenge Yourself</h2>
          <p className="text-stone-600 mb-4">Make your move on the board!</p>

          {feedback.message && (
            <div className={`p-4 rounded-lg mb-4 ${
              feedback.type === 'success' 
                ? 'bg-green-100 border border-green-400 text-green-800' 
                : 'bg-red-100 border border-red-400 text-red-800'
            }`}>
              <span className="font-medium">{feedback.message}</span>
            </div>
          )}

          <button
            className="w-full px-6 py-3 bg-stone-700 hover:bg-stone-800 text-stone-50 font-semibold rounded-lg shadow-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            onClick={handleGetPuzzle}
            disabled={isLoadingPuzzle}
          >
            {isLoadingPuzzle && (
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {isLoadingPuzzle ? 'Loading...' : 'Get New Puzzle'}
          </button>
        </div>

        {/* --- The "Puzzle Info" Card --- */}
        <div className="bg-stone-50 rounded-2xl shadow-xl border border-stone-300 overflow-hidden">
          <div className="bg-stone-700 text-stone-50 px-6 py-3">
            <h3 className="text-lg font-semibold">Puzzle Details</h3>
          </div>
          <div className="divide-y divide-stone-300">
            <div className="px-6 py-4">
              <div className="text-sm text-stone-600 mb-1">Puzzle ID</div>
              <div className="text-2xl font-bold text-stone-800">{puzzle ? puzzle.id : 'N/A'}</div>
            </div>
            <div className="px-6 py-4">
              <div className="text-sm text-stone-600 mb-1">Rating</div>
              <div className="text-2xl font-bold text-stone-700">{puzzle ? puzzle.rating : 'N/A'}</div>
            </div>
            <div className="px-6 py-4">
              <div className="text-sm text-stone-600 mb-1">Themes</div>
              <div className="text-lg font-semibold text-stone-600">{puzzle ? (puzzle.themes || 'N/A') : 'N/A'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}