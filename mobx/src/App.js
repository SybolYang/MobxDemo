import './App.css'
import Counter from './store/Counter'
import CounterStore from './store/CounterStore'

const counterStore = new CounterStore()

function App() {
  return (
    <div className="App">
      <Counter counterStore={counterStore} />
    </div>
  )
}

export default App
