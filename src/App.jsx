import { useState } from 'react';
import './App.css'
import { GameBoard } from './Game';
import { ScoreBoard } from './Score';


function App() {

  const [maxScore, setMaxScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)

  if (currentScore > maxScore) { setMaxScore(currentScore) }

  return (
    <>
      <h1 className="py-2 text-gray-900 text-5xl font-extrabold text-center">Memory Cats</h1>
      < ScoreBoard score={currentScore} maxScore={maxScore} />
      < GameBoard setScore={setCurrentScore} />
    </>
  )
}

export default App
