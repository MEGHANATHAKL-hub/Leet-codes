/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    var node =  head;
    while(node && node.next != null) {
        if(node.val == node.next.val) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    return head
};