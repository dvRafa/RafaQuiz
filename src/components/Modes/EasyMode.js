import '../../global.css'
import { EasyModeQuestions } from '../../assets/Questions'
import { useState } from 'react'
import { useLocation } from 'wouter'

export default function EasyMode() {
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [location, setLocation] = useLocation()

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < EasyModeQuestions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const FinalScore = () => {
    if (score === 0) return <strong>You failed :(</strong>
    if (score === 1) return <strong>It could be better</strong>
    if (score === 2) return <strong>Almost perfect</strong>

    return <strong>Great job</strong>
  }

  return (
    <>
      {showScore ? (
        <div className="border-2 px-32 py-16 rounded-md border-[#222] grid text-center gap-6">
          <p className="text-center text-xl">
            {score}
            <span className="text-center text-xl">
              {' '}
              out of {EasyModeQuestions.length}
            </span>
          </p>
          <FinalScore />
          <button
            className="border text-base hover:ease-in font-semibold	hover:duration-600 px-4 py-2 items-center rounded-md hover:bg-white hover:text-black hover:transition"
            type="reset"
            onClick={() => setLocation('/')}
          >
            PLAY AGAIN
          </button>
          {`The current page is: ${location}`}
        </div>
      ) : (
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
              /<p>{EasyModeQuestions.length}</p>
            </div>
            <h2 className="text-xl">
              {EasyModeQuestions[currentQuestion].questionText}
            </h2>
          </div>
          <div className="quiz-app-options">
            {EasyModeQuestions[currentQuestion].answerOptions.map(
              (answerOption) => (
                <button
                className='border text-base rounded-md border-[#333] items-center hover:transition hover:border-[#444] py-2 hover:ease-in hover:duration-75'
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </>
  )
}
