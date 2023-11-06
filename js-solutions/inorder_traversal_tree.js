/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    const result = [];

    function traverse(node) {
        if (node) {
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
        }
     }

    traverse(root);

    return result;
};


//Using Stack

class Node {
    constructor(stack) {
       this.data = stack;
       this.left = this.right = null;
    }
 }
 var root_Node;
 function inorderUsingStack() {
    if (root_Node == null)
    return;
    let stack = [];
    let current_Node = root_Node;

    while (current_Node != null || stack.length > 0) {
       while (current_Node != null) {
          stack.push(current_Node);
          current_Node = current_Node.left;
       }
       current_Node = stack.pop();
       document.write(current_Node.data + "→");
       current_Node = current_Node.right;
    }
 }
 root_Node = new Node('A');
 root_Node.left = new Node('B');
 root_Node.right = new Node('C');
 root_Node.right.left = new Node('D');
 root_Node.right.right = new Node('E');
 root_Node.right.right.left = new Node('F');
 root_Node.right.right.right = new Node('G');
 inorderUsingStack();