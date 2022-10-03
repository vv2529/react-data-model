import { createContext } from 'react'
import Context from './data-model/Context'

const appContext = createContext(
	new Context({
		lets: {
			number: 0,
			questionMarks: 1,
		},
		internalLets: {
			interactions: 0,
		},
		consts: {
			step: 1,
		},
	})
)

export default appContext
