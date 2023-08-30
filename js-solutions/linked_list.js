class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        let temp;
        while (node) {
            temp = node;
            node = node.next;
        }

        return temp
    }

    append(data) {
        let newNode = new ListNode(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let node = this.head;

        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    }

    pop() {
        if (!this.head) {
            return;
        }
        let previousNode;
        let node = this.head;

        while (node.next) {
            previousNode = node
            node = node.next;
        }
        previousNode.next = null;
    }

}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
node1.next = node2;

let list = new LinkedList(node1);

console.log(list.head.next.data)

console.log(list.size())

console.log(list.getFirst())

console.log(list.getLast())

list.append(3);

list.pop();

console.log(list.getLast())
 //console.log(list.head.next.next.data);



