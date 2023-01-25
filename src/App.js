import './global.css'
import Quiz from './components/Quiz'
import { Route } from 'wouter'
import SecondLevel from './components/SecondLevel'
import Front from './components/Front'

function App() {
  return (
    <div className="quiz-app">
      <div className="quiz-app-container">
        <div className="quiz-app-play"></div>
        <Route path="/quiz" component={Quiz} />
        <Route path="/second-level" component={SecondLevel} />
        <Route path="/" component={Front} />
      </div>
    </div>
  )
}

export default App
