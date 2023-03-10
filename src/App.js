import { useState } from 'react'
import './App.css';

function App() {
	const [count, setCount] = useState(0)

	const countPlus = () => {
		setCount(count+ 1)
	}

	const countMinus = () => {
		setCount(count- 1)
	}

	return <div className="App">
		<div>
	    <h2>Счетчик:</h2>
		  <h1>{count}</h1>
      <button onClick={countMinus} className="minus action">- Минус</button>
      <button onClick={countPlus} className="plus action">Плюс +</button>
    </div>
	</div>
}

export default App;
