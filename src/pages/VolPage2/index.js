import { useState } from 'react'
import Score from '../../components/Score'
import VolComponent2 from 'components/VolComponent2'

export default function VolPage2() {
  
  const [showScore, setShowScore] = useState(false)

  return <>{showScore ? <Score /> : <VolComponent2 />}</>
}
