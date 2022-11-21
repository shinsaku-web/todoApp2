import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <h1 className="text-3xl text-blue-400 font-bold underline">
      Hello world!
      </h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>
  )
}

export default App
