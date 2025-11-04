import { QuoteCard } from "../components/QuoteCard";

export function HomePage({ onNavigate }) {
  const chessLegends = [
    {
      name: "Garry Kasparov",
      quote: "Chess is life in miniature. Chess is a struggle, chess is battles.",
      image: "/Kasprov.jpg"
    },
    {
      name: "Magnus Carlsen",
      quote: "Some people think that if their opponent plays a beautiful game, it's okay to lose. I don't. You have to be merciless.",
      image: "/Carlsen.jpg"
    },
    {
      name: "Bobby Fischer",
      quote: "Chess is war over the board. The object is to crush the opponent's mind.",
      image: "/Fischer.jpg"
    },
    {
      name: "Mikhail Tal",
      quote: "You must take your opponent into a deep dark forest where 2+2=5, and the path leading out is only wide enough for one.",
      image: "/Tal.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-200 via-neutral-100 to-stone-100">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Header Section */}
        <header className="text-center my-12">
          <h1 className="text-5xl font-bold text-stone-800 mb-4">
            ♔ Chess Masters ♚
          </h1>
          <p className="text-xl text-stone-600 mt-2">
            Wisdom from the Greatest Minds in Chess
          </p>
        </header>

        {/* Chess Legends with Quotes Section */}
        <div className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {chessLegends.map((legend, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-stone-50 to-neutral-100 rounded-2xl shadow-2xl overflow-hidden border border-stone-300 hover:border-stone-400 transition-all duration-300 hover:scale-105"
              >
                {/* Player Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={legend.image}
                    alt={legend.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-800/30 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-stone-50 drop-shadow-lg">
                    {legend.name}
                  </h3>
                </div>

                {/* Quote Card */}
                <div className="p-6">
                  <QuoteCard quote={legend.quote} author={legend.name} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center my-16">
          <p className="text-lg text-stone-700 mb-6">
            Ready to improve your game?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('puzzles')}
              className="px-8 py-3 bg-stone-700 hover:bg-stone-800 text-stone-50 font-semibold rounded-lg shadow-lg transition-colors duration-300 cursor-pointer"
            >
              Solve Puzzles
            </button>
            <button
              onClick={() => onNavigate('guide')}
              className="px-8 py-3 bg-stone-500 hover:bg-stone-600 text-white font-semibold rounded-lg shadow-lg transition-colors duration-300 cursor-pointer"
            >
              Training Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}