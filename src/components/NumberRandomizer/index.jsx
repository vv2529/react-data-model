import useAppModel from '../../useAppModel'

export default function NumberRandomizer() {
	// State updates to `questionMarks` will only be triggered in this component's tree
	const app = useAppModel(['questionMarks'])

	return (
		<div>
			<button
				className="big"
				onClick={() => app.randomize()}
				onContextMenu={(event) => {
					event.preventDefault()
					app.addQuestionMarks(1)
				}}
			>
				{'?'.repeat(app.questionMarks)}
			</button>
		</div>
	)
}
