import {Link} from 'wouter'

export default function Front() {

  return (
    <div className="quiz-app-play">
      <h1 className="text-center font-mono font-bold">React Quiz 📒</h1>
      <div className="gap-2 mt-4 max-w-[200px] grid m-auto">
        <Link href="/quiz">
            <a>Easy</a>
        </Link>
        <Link href="/second-level">
            <a>Moderate</a>
        </Link>
      </div>
    </div>
  )
}
