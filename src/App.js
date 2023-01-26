import './global.css'
import { Route } from 'wouter'
import MenuComponent from 'components/Menu'
import VolPage from 'pages/VolPage'
import VolPage2 from 'pages/VolPage2'

function App() {
  return (
    <main>
      <Route path="/" component={MenuComponent} />
      <Route path="/vol-page" component={VolPage} />
      <Route path="/vol-page-2" component={VolPage2} />
    </main>
  )
}

export default App
