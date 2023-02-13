import './App.css'
import Erick from './components/Erick'
import Junior from './components/Junior'
import Manuel from './components/Manuel'
import Nelson from './components/Nelson'
import Salvador from './components/Salvador'

function App() {

  return (
    <div className="App flex gap-6 min-h-screen justify-center items-center">
      <Erick />
      <Junior />
      <Manuel />
      <Nelson />
      <Salvador />
    </div>
  )
}

export default App
