/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.next = (next===undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let nextTemp = curr.next; // Store next node
        curr.next = prev;         // Reverse current node's pointer
        prev = curr;              // Move prev forward
        curr = nextTemp;          // Move curr forward
    }

    return prev; // New head of reversed list
};
