import { useState } from 'react'
import { Questions } from '../assets/Questions'

export default function Quiz() {
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const reloadPage = () => {
    window.location.reload()
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < Questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const FinalScore = () => {
    if (score === 0) {
      return <strong>Try again</strong>
    } else if (score === 1) {
      return <strong>Try one more time</strong>
    } else if (score === 2) {
      return <strong>It could be better</strong>
    } else {
      return <strong>Great job</strong>
    }
  }

  return (
    <>
      {showScore ? (
        <div className="border-2 px-32 py-16 rounded-md border-[#222] grid text-center gap-6">
          <p className="text-center text-xl">
            {score}{' '}
            <span className="text-center text-xl">
              {' '}
              out of {Questions.length}
            </span>
          </p>
          <FinalScore />
          <button
            className="border text-base hover:ease-in font-semibold	hover:duration-600 px-4 py-2 items-center rounded-md hover:bg-white hover:text-black hover:transition"
            type="reset"
            onClick={reloadPage}
          >
            PLAY AGAIN
          </button>
        </div>
      ) : (
        <>
          <div className="quiz-app-container-div">
            <div className="quiz-app-score">
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row'
                }}
              >
                <p className="text-xl font-bold">
                  Question {currentQuestion + 1}
                </p>
                /<p>{Questions.length}</p>
              </div>
              <h2 className="text-xl">
                {Questions[currentQuestion].questionText}
              </h2>
            </div>
            <div className="quiz-app-options">
              {Questions[currentQuestion].answerOptions.map(
                (eachAnswer, index) => (
                  <ul key={index}>
                    <li
                      className="cursor-pointer hover:border hover:border-gray-600 border block border-[#333] rounded-md px-2 py-2 text-left text-sm"
                      onClick={() =>
                        handleAnswerOptionClick(eachAnswer.isCorrect)
                      }
                    >
                      {eachAnswer.answerText}
                    </li>
                  </ul>
                )
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}
