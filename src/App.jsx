import { useState } from 'react'
import { Navbar } from '../components/Navbar';
import { HomePage } from '../pages/HomePage';
import { PuzzlesPage } from '../pages/PuzzlesPage';
import { TrainingGuidePage } from '../pages/TrainingGuidePage';
import './App.css'

export default function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage onNavigate={setPage} />;
      case 'puzzles':
        return <PuzzlesPage />;
      case 'guide':
        return <TrainingGuidePage onNavigate={setPage} />;
      default:
        return <HomePage onNavigate={setPage} />;
    }
  };

  return (
    <>
      <Navbar onNavigate={setPage} />
      <main className="bg-gradient-to-br from-stone-200 via-neutral-100 to-stone-100 min-h-screen">
        {renderPage()}
      </main>
    </>
  );
}
