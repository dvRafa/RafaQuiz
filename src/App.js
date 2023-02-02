import './global.css'
import { Route } from 'wouter'
import Menu from 'components/Menu'
import EasyMode from 'components/EasyMode'

function App() {
  return (
    <main>
      <Route path="/" component={Menu} />
      <Route path="/EasyMode" component={EasyMode} />
    </main>
  )
}

export default App
