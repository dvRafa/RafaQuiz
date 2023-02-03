import './global.css'
import { Route } from 'wouter'
import Menu from 'components/Menu'
import ModerateMode from 'components/Modes/ModerateMode'
import EasyMode from 'components/Modes/EasyMode'

function App() {
  return (
    <main>
      <Route path="/" component={Menu} />
      <Route path="/EasyMode" component={EasyMode} />
      <Route path="/ModerateMode" component={ModerateMode} />
    </main>
  )
}

export default App
