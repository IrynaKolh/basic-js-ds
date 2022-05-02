const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

    constructor() {
        this.element = {};
        this.head = 0;
        this.tail = 0;
    }

    getUnderlyingList() {
        return this.element[this.head];
    }

    enqueue(value) {
        if (this.tail === 0) {
            const item = new ListNode(value);
            this.element[this.tail] = item;
        } else {
            let current = this.element[this.head];
            while (current.next) {
                current = current.next;
            }
            current.next = new ListNode(value);
        }
        this.tail++;
    }

    dequeue() {
        let item = this.element[this.head];
        this.element[this.head] = item.next;
        this.tail--;
        return item.value;
    }
}

module.exports = {
    Queue
};