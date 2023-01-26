import '../../global.css'
import { Vol } from '../../assets/Questions'

export default function VolComponent({
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

    if (nextQuestion < Vol.length) {
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
          <p>{Vol.length}</p>
        </div>
        <h2 className="text-xl">{Vol[currentQuestion].questionText}</h2>
      </div>
      <div className="quiz-app-options">
        {Vol[currentQuestion].answerOptions.map((eachAnswer) => (
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
