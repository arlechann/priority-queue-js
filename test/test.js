import { assert } from 'chai';
import PriorityQueue from '../index.js';

describe('PriorityQueue', function() {
	const comp = (a, b) => a < b;

	describe('constructor', function() {
		it('should be empty', function() {
			const pq = new PriorityQueue(comp);
			assert.deepEqual(pq.heap, []);
		});

		it('should be set given function', function() {
			const pq = new PriorityQueue(comp);
			assert.equal(pq.compare, comp);
		});
	});

	describe('isEmpty', function() {
		context('when heap is empty', function() {
			it('should be true', function() {
				const pq = new PriorityQueue(comp);
				assert.isTrue(pq.isEmpty());
			});
		});

		context('when heap has element', function() {
			it('should be false', function() {
				const pq = new PriorityQueue(comp);
				pq.heap = [0];
				assert.isFalse(pq.isEmpty());
			});
		});
	});
});

