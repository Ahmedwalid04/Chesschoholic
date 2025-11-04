export function TrainingGuidePage({ onNavigate }) {
  const trainingTopics = [
    {
      title: "Opening Principles",
      icon: "♔",
      tips: [
        "Control the center with pawns (e4, d4, e5, d5)",
        "Develop knights before bishops",
        "Castle early to protect your king",
        "Don't move the same piece twice in the opening",
        "Connect your rooks"
      ]
    },
    {
      title: "Tactical Patterns",
      icon: "♞",
      tips: [
        "Look for forks, pins, and skewers",
        "Check all checks - forcing moves first",
        "Calculate captures and threats",
        "Look for discovered attacks",
        "Practice puzzles daily"
      ]
    },
    {
      title: "Endgame Fundamentals",
      icon: "♚",
      tips: [
        "King and pawn endgames: opposition is key",
        "Rook endgames: activate your rook",
        "Two bishops are strong in the endgame",
        "Know basic checkmates (K+Q, K+R)",
        "Push passed pawns"
      ]
    },
    {
      title: "Study Resources",
      icon: "",
      tips: [
        "Study master games in your opening",
        "Analyze your own games for mistakes",
        "Watch instructional videos",
        "Read classic chess books",
        "Join a chess club or online community"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">
          ♕ Chess Training Guide
        </h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
          Master the fundamentals and take your game to the next level with these essential training tips.
        </p>
      </header>

      {/* Training Topics Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {trainingTopics.map((topic, index) => (
          <div 
            key={index}
            className="bg-stone-50 rounded-2xl shadow-xl p-6 border border-stone-300 hover:border-stone-400 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{topic.icon}</span>
              <h2 className="text-2xl font-bold text-stone-800">{topic.title}</h2>
            </div>
            <ul className="space-y-3">
              {topic.tips.map((tip, tipIndex) => (
                <li key={tipIndex} className="flex items-start gap-3">
                  <span className="text-stone-600 mt-1">•</span>
                  <span className="text-stone-700 leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-stone-700 to-stone-800 rounded-2xl shadow-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-stone-50 mb-4">
          Ready to Practice?
        </h3>
        <p className="text-stone-200 mb-6">
          Apply what you've learned by solving tactical puzzles and testing your skills!
        </p>
        <button 
          onClick={() => onNavigate('puzzles')}
          className="inline-block px-8 py-3 bg-stone-100 hover:bg-white text-stone-800 font-semibold rounded-lg shadow-lg transition-colors duration-300 cursor-pointer"
        >
          Try Puzzles Now
        </button>
      </div>
    </div>
  );
}