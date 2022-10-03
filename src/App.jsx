import './App.css'
import useAppModel from './useAppModel'
import NumberController from './components/NumberController'
import NumberRandomizer from './components/NumberRandomizer'

function App() {
	// State updates to `number` will be triggered across the entire app
	const app = useAppModel(['number'])

	return (
		<div className="app">
			<div className="number">
				{app.number} / {app.questionMarks}
			</div>
			<NumberController />
			<NumberRandomizer />
		</div>
	)
}

export default App
