import Model from './data-model/Model'

export default class AppModel extends Model {
	increase() {
		this.number += this.step
		this.interactions++
	}
	decrease() {
		this.number -= this.step
		this.interactions++
	}
	randomize() {
		this.number = Math.floor(Math.random() * 10)
		this.interactions++
	}
	addQuestionMarks(n) {
		this.questionMarks += n
	}
}
