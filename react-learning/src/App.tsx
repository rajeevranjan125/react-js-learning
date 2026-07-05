import Hello from './Hello'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="top-left">
        <h1>Hello React</h1>
      </div>
      <div className="top-right">
        <Hello />
      </div>
    </div>
  )
}

export default App