import { useState } from 'react'
import Score from 'components/Score'
import VolComponent from 'components/Vol'

export default function VolPage() {
  
  const [showScore, setShowScore] = useState(false)

  return <>{showScore ? <Score /> : <VolComponent />}</>
}
