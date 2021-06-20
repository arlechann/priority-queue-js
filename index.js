export default class PriorityQueue {
	constructor(comp) {
		this.heap = [];
		this.compare = comp;
	}

	isEmpty() {
		return this.heap.length == 0;
	}

	_parentIndex(i) {
		return Math.floor((i - 1) / 2);
	}

	_upHeap(i) {
		let p = this._parentIndex(i);
		while(i > 0 && this.compare(this.heap[p], this.heap[i])) {
			[this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
			i = p;
			p = this._parentIndex(i);
		}
	}

	push(x) {
		this._upHeap(this.heap.push(x) - 1);
	}
}
