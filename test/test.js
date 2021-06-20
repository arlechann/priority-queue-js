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

	describe('push', function() {
		context('when heap is empty', function() {
			it('should be pushed', function() {
				const pq = new PriorityQueue(comp);
				pq.push(0);
				assert.deepEqual(pq, { heap: [0], compare: comp });
			});
		});

		context('when heap has elements', function() {
			it('should be pushed and up-heaped', function() {
				const pq = new PriorityQueue(comp);
				pq.heap = [9, 3, 8, 1, 2, 6, 4];
				pq.push(5);
				assert.deepEqual(
					pq,
					{
						heap: [9, 5, 8, 3, 2, 6, 4, 1],
						compare: comp
					}
				);
				pq.push(10);
				assert.deepEqual(
					pq,
					{
						heap: [10, 9, 8, 5, 2, 6, 4, 1, 3],
						compare: comp
					}
				);
			});
		});
	});

	describe('pop', function() {
		context('when heap is empty', function() {
			it('should be undefined', function() {
				const pq = new PriorityQueue(comp);
				assert.isUndefined(pq.pop());
			});
		});

		context('when heap has elements', function() {
			it('should be popped and down-heaped', function() {
				const pq = new PriorityQueue(comp);
				pq.heap = [10, 9, 8, 5, 2, 6, 4, 1, 3];
				assert.equal(pq.pop(), 10);
				assert.deepEqual(
					pq,
					{
						heap: [9, 5, 8, 3, 2, 6, 4, 1],
						compare: comp
					}
				);
				assert.equal(pq.pop(), 9);
				assert.deepEqual(
					pq,
					{
						heap: [8, 5, 6, 3, 2, 1, 4],
						compare: comp
					}
				);
			});
		});
	});
});

