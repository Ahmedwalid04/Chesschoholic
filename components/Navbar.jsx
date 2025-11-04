export function Navbar({ onNavigate }) {
  const NavButton = ({ page, children }) => (
    <button
      onClick={() => onNavigate(page)}
      className="px-4 py-2 text-sm font-medium text-stone-300 rounded-md hover:bg-stone-700 hover:text-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-500 transition-colors duration-200"
    >
      {children}
    </button>
  );

  return (
    <nav className="w-full bg-stone-800 shadow-lg border-b-2 border-stone-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-2xl font-bold text-stone-100 flex items-center gap-2">
          Chesschoholic
          <span className="text-3xl">♞</span>
        </span>
        <div className="flex space-x-2">
          <NavButton page="home">Home</NavButton>
          <NavButton page="puzzles">Puzzles</NavButton>
          <NavButton page="guide">Training Guide</NavButton>
        </div>
      </div>
    </nav>
  );
}