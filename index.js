export default class PriorityQueue {
	constructor(comp) {
		this.heap = [];
		this.compare = comp;
	}

	isEmpty() {
		return this.heap.length == 0;
	}
}
