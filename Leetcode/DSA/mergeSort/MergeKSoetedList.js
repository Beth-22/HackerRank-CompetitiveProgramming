// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            if (this.heap[parent].val > this.heap[index].val) {
                [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
                index = parent;
            } else break;
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return min;
    }

    bubbleDown(index) {
        const length = this.heap.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left].val < this.heap[smallest].val) {
                smallest = left;
            }
            if (right < length && this.heap[right].val < this.heap[smallest].val) {
                smallest = right;
            }

            if (smallest !== index) {
                [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
                index = smallest;
            } else break;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

var mergeKLists = function(lists) {
    const minHeap = new MinHeap();
    
    for (let node of lists) {
        if (node !== null) {
            minHeap.insert(node);
        }
    }

    const dummy = new ListNode(0);
    let current = dummy;

    while (!minHeap.isEmpty()) {
        const smallestNode = minHeap.extractMin();
        current.next = smallestNode;
        current = current.next;
        if (smallestNode.next !== null) {
            minHeap.insert(smallestNode.next);
        }
    }

    return dummy.next;
};

