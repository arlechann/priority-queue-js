export default class PriorityQueue {
	constructor(comp) {
		this.heap = [];
		this.compare = comp;
	}

	isEmpty() {
		return this.heap.length == 0;
	}

	push(x) {
		this._upHeap(this.heap.push(x) - 1);
	}

	pop() {
		if(this.isEmpty()) { return undefined; }
		this._heapSwap(0, this.heap.length - 1);
		const ret = this.heap.pop();
		this._downHeap(0);
		return ret;
	}

	_upHeap(i) {
		let p = this._parentIndex(i);
		while(i > 0 && this.compare(this.heap[p], this.heap[i])) {
			this._heapSwap(p, i);
			i = p;
			p = this._parentIndex(i);
		}
	}

	_downHeap(i) {
		let c = this._childrenIndexes(i);
		while(c.length != 0) {
			const next = c.reduce((acc, j) => this.compare(this.heap[acc], this.heap[j]) ? j : acc, i);
			if(next == i) { break; }
			this._heapSwap(i, next);
			i = next;
			c = this._childrenIndexes(next);
		}
	}

	_parentIndex(i) {
		return Math.floor((i - 1) / 2);
	}

	_childrenIndexes(i) {
		return [i * 2 + 1, i * 2 + 2].filter(n => n < this.heap.length);
	}

	_heapSwap(i, j) {
		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
	}
}
