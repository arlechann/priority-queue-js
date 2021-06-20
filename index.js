export default class PriorityQueue {
	constructor(comp) {
		this.heap = [];
		this.compare = comp;
	}
}
