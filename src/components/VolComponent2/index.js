import '../../global.css'
import { Vol2 } from '../../assets/Questions'

export default function VolComponent2({
  score,
  setScore,
  currentQuestion,
  setCurrentQuestion,
  setShowScore
}) {
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < Vol2.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div className="quiz-app-container-div">
      <div className="quiz-app-score">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <p className="text-xl font-bold">Question {currentQuestion + 1}</p>/
          <p>{Vol2.length}</p>
        </div>
        <h2 className="text-xl">{Vol2[currentQuestion].questionText}</h2>
      </div>
      <div className="quiz-app-options">
        {Vol2[currentQuestion].answerOptions.map((eachAnswer) => (
          <ul key={eachAnswer.id}>
            <li
              className="cursor-pointer hover:border hover:border-gray-600 border block border-[#333] rounded-md px-2 py-2 text-left text-sm"
              onClick={() => handleAnswerOptionClick(eachAnswer.isCorrect)}
            >
              {eachAnswer.answerText}
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}
