export function QuoteCard({ quote, author }) {
  return (
    <div className="w-full bg-stone-100/80 backdrop-blur-sm rounded-xl shadow-xl p-6 border-l-4 border-stone-600">
      <div className="flex flex-col gap-4">
        <blockquote className="text-lg font-medium italic text-stone-800 leading-relaxed">
          <span className="text-stone-500 text-3xl mr-2">"</span>
          {quote}
          <span className="text-stone-500 text-3xl ml-2">"</span>
        </blockquote>
        <cite className="text-right text-stone-600 font-semibold text-sm tracking-wide">
          — {author}
        </cite>
      </div>
    </div>
  );
}
