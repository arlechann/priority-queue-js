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
});

