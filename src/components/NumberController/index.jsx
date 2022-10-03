import useAppModel from '../../useAppModel'

export default function NumberController() {
	// This component doesn't add any state update triggers, only those inherited from its parent components are in effect
	const app = useAppModel()

	return (
		<div>
			<button className="small" onClick={() => app.decrease()}>
				-
			</button>
			<button className="small" onClick={() => app.increase()}>
				+
			</button>
		</div>
	)
}
