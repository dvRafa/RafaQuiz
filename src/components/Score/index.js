import { useLocation } from 'wouter'
import { Vol } from '../../assets/Questions'

export default function Score({ score }) {
  const [location, setLocation] = useLocation()

  const FinalScore = () => {
    if (score === 0) {
      return <strong>Try again</strong>
    } else if (score === 1) {
      return <strong>Try again</strong>
    } else if (score === 2) {
      return <strong>It could be better</strong>
    } else {
      return <strong>Great job</strong>
    }
  }

  return (
    <div className="border-2 px-32 py-16 rounded-md border-[#222] grid text-center gap-6">
      <p className="text-center text-xl">
        {score}{' '}
        <span className="text-center text-xl"> out of {Vol.length}</span>
      </p>
      <FinalScore />
      <button
        className="border text-base hover:ease-in font-semibold	hover:duration-600 px-4 py-2 items-center rounded-md hover:bg-white hover:text-black hover:transition"
        type="reset"
        onClick={() => setLocation('/')}
      >
        PLAY AGAIN
      </button>
    </div>
  )
}
