import './global.css'
import Quiz from './components/Quiz'
import { useState } from 'react'

function App() {
  const [play, setPlay] = useState(true)

  return (
    <div className="quiz-app">
      <div className="quiz-app-container">
        {play ? (
          <div className="quiz-app-play">
            <h1 className="text-center font-mono font-bold">React Quiz 📒</h1>
            <div className="gap-2 mt-2 max-w-[200px] grid m-auto">
              <button
                className="text-xl border hover:ease-in hover:duration-100 hover:transition-all border-[#222] hover:border-[#444] py-1"
                type="submit"
                onClick={() => setPlay(!play)}
              >
                Play
              </button>
              <small></small>
              <small className="border text-center border-[#222] hover:border-[#444] hover:transition-all hover:duration-100 hover:ease-in py-2">
                create account
              </small>
            </div>
          </div>
        ) : (
          <Quiz />
        )}
      </div>
    </div>
  )
}

export default App
